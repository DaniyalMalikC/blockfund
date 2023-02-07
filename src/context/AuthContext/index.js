import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import React, {createContext, useEffect, useRef, useState} from 'react';

//Firebase
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {GeneralUtil} from '../Util';

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [addressDisable, setAddressDisable] = useState(false);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    userRegistry();
    getLocation();
  }, []);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        let getCountry, getState, getCity;
        const {latitude, longitude} = position.coords;
        let placename;
        let latlng = `${latitude},${longitude}`;
        var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyD3kMuboYUJcGN3EteQcL4PTnwS7t2o-Z8`;

        await fetch(url, {method: 'GET'})
          .then(res => res.json())
          .then(res => {
            res.results.forEach(element => {
              var arr = element.address_components;
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].types.includes('country')) {
                  getCountry = arr[i].long_name ? arr[i].long_name : getCountry;
                }
                if (arr[i].types.includes('administrative_area_level_1')) {
                  getState = arr[i].long_name ? arr[i].long_name : getState;
                }
                if (arr[i].types.includes('locality')) {
                  getCity = arr[i].long_name ? arr[i].long_name : getCity;
                }
              }
            });

            if (res.results[0]) {
              setAddress(res.results[0].formatted_address);
            }
          })
          .catch(error => {
            return console.error(error);
          });
        handleLocation(latitude, longitude, getCountry, getState, getCity);
        setAddressDisable(true);
      },
      err => {
        console.error(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  };

  const handleLocation = (lat, long, country, state, city, loader) => {
    setCoordinates({
      lat: lat,
      long: long,
    });
    setCountry(country);
    setState(state);
    setCity(city || user.city);
    loader && loader(false);
  };

  const userRegistry = async () => {
    const getUser = await AsyncStorage.getItem('User');

    if (getUser !== null) {
      const verification = auth().currentUser.emailVerified;
      console.log('Working from Registry');

      setUser(JSON.parse(getUser));
      AsyncStorage.setItem('EmailVerified', JSON.stringify(verification));
    }
  };

  const onSignIn = async (email, password, navigation) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(Token => {
        const User = Token.user;

        const verification = User.emailVerified;
        AsyncStorage.setItem('EmailVerified', JSON.stringify(verification));

        firestore()
          .collection('Users')
          .doc(User.uid)
          .get()
          .then(doc => {
            const UserData = doc.data();
            setUser(UserData);
            navigation.navigate('Tabs');
          });
      })
      .catch(error => {
        error.code === 'auth/invalid-email'
          ? alert('This email address is invalid or does not exist!')
          : error.code === 'auth/wrong-password'
          ? alert('Your credentials are invalid!')
          : console.error(error);
      });
  };

  const onSignUp = async (obj, navigation) => {
    const {
      email,
      password,
      username,
      phoneNumber,
      // DOB,
      gender,
      country,
      state,
      city,
      address,
    } = obj;

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(Token => {
        const User = Token.user;

        const verification = User.emailVerified;
        AsyncStorage.setItem('EmailVerified', JSON.stringify(verification));

        User.updateProfile({
          displayName: username,
        });

        const data = {
          avatar: '',
          email: User.email,
          name: username,
          uid: User.uid,
          createdAt: GeneralUtil.datetimeFormatter(new Date()),
          phoneNumber: phoneNumber,
          // DOB: DOB,
          gender: gender,
          country: country,
          state: state,
          city: city,
          address: address,
        };

        firestore()
          .collection('Users')
          .doc(User.uid)
          .set(data)
          .then(() => {
            alert('Successfully Logged In!');
            AsyncStorage.setItem('User', JSON.stringify(data));
            setUser(data);
            navigation.navigate('Tabs');
          });
      })
      .catch(error => {
        error.code === 'auth/email-already-in-use'
          ? alert('That email address is already in use!')
          : error.code === 'auth/invalid-email'
          ? alert('That email address is invalid!')
          : console.error(error);
      });
  };

  const recoverPass = email => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Password Link send to your Email!');
      });
  };

  const onSignOut = async navigation => {
    AsyncStorage.removeItem('User');
    AsyncStorage.clear();
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Auth');
        alert('Logout');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        country,
        state,
        city,
        address,
        addressDisable,
        coordinates,
      }}>
      <AuthAction.Provider value={{onSignOut, onSignUp, onSignIn}}>
        {children}
      </AuthAction.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Auth Context
export const AuthContext = createContext();
export const AuthAction = createContext();
