import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {getDefaultProvider, providers, ethers, Wallet} from 'ethers';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../AuthContext';
import firestore from '@react-native-firebase/firestore';
import {GeneralUtil} from '../Util';

const MetaMaskContextProvider = ({children}) => {
  const {user} = useContext(AuthContext);
  const [ethAddress, setEthAddress] = useState('');
  const [connected, setConnected] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [loader, setLoader] = useState(false);
  const connector = useWalletConnect();

  const handleMetaMask = async () => {
    setLoader(true);
    const wallet = Wallet.createRandom();
    // console.log('window.ethereum => ', window.ethereum);
    // if (window.ethereum && defaultAccount == null) {
    //   // set ethers provider
    //   setProvider(new providers.Web3Provider(window.ethereum));

    //   // connect to metamask
    //   window.ethereum
    //     .request({method: 'eth_requestAccounts'})
    //     .then(result => {
    //       setConnButtonText('Wallet Connected');
    //       setDefaultAccount(result[0]);
    //     })
    //     .catch(error => {
    //       setErrorMessage(error.message);
    //     });
    // } else if (!window.ethereum) {
    //   console.log('Need to install MetaMask');
    //   setErrorMessage('Please install MetaMask browser extension to interact');
    // }
    // const provider = getDefaultProvider('rinkeby');
    // console.log('provider.anyNetwork => ', provider.anyNetwork);
    // provider.getBalance().then(accounts => {
    //   setEthAccount(accounts);
    // });
    console.log('wallet => ', wallet);
    if (wallet?.address !== '') {
      await AsyncStorage.setItem('Eth_Address', wallet.address);
      setTimeout(() => {
        setEthAddress(wallet.address);
        setConnected(true);
      }, 10000);
      setLoader(false);
    }
    const connection = await connector.connect();
    console.log('connection => ', connection);

    // const provider = new ethers.providers.JsonRpcProvider();
    // await provider.send('eth_requestAccounts', []);
  };

  const checkConnection = async () => {
    const getAddress = await AsyncStorage.getItem('Eth_Address');
    if (getAddress !== '' && getAddress !== null && getAddress !== undefined) {
      setEthAddress(getAddress);
      setConnected(true);
    }
  };

  const addTransaction = data => {
    const dataSet = {
      ...data,
      userId: user.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
      approvedAt: '',
      completedAt: '',
    };
    firestore()
      .collection('Transactions')
      .add(dataSet)
      .then(() => {
        alert('Transaction created Successfully!');
      });
  };

  const addFeedback = data => {
    const dataSet = {
      ...data,
      userId: user.uid,
    };
    firestore()
      .collection('Feedback')
      .add(dataSet)
      .then(() => {
        alert('Feedback submitted Successfully!');
      });
  };

  const addTicket = data => {
    const dataSet = {
      ...data,
      userId: user.uid,
    };
    firestore()
      .collection('Ticket')
      .add(dataSet)
      .then(() => {
        alert('Feedback submitted Successfully!');
      });
  };

  const getTransaction = () => {
    if (user.uid) {
      firestore()
        .collection('Transactions')
        .where('userId', '==', user.uid)
        .orderBy('createdAt', 'desc')
        .onSnapshot(docSnap => {
          if (docSnap && !docSnap?.empty) {
            const dataSet = docSnap.docs.map(data => {
              const transaction = data.data();
              return {
                transactionId: data.id,
                amount: transaction.amount,
                recipient: transaction.recepient,
                completedAt: transaction.completedAt
                  ? GeneralUtil.datetimeFormatter(
                      transaction.completedAt?.toDate(),
                      true,
                    )
                  : 'Pending',
                approvedAt: transaction.completedAt
                  ? GeneralUtil.datetimeFormatter(
                      transaction.approvedAt?.toDate(),
                      true,
                    )
                  : 'Pending',
                createdAt: transaction.completedAt
                  ? GeneralUtil.datetimeFormatter(
                      transaction.createdAt?.toDate(),
                      true,
                    )
                  : 'Pending',
              };
            });
            setTransactions(dataSet);
          }
        });
    }
  };

  useEffect(() => {
    checkConnection();
    getTransaction();
  }, [user]);

  return (
    <MetaMaskContext.Provider
      value={{
        ethAddress,
        connected,
        transactions,
        loader,
      }}>
      <MetaMaskAction.Provider
        value={{
          handleMetaMask,
          addTransaction,
          addFeedback,
          addTicket,
          setLoader,
        }}>
        {children}
      </MetaMaskAction.Provider>
    </MetaMaskContext.Provider>
  );
};

export default MetaMaskContextProvider;

// MetaMask Context
export const MetaMaskContext = createContext();
export const MetaMaskAction = createContext();
