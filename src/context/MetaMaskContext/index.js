import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {getDefaultProvider, providers, ethers, Wallet} from 'ethers';
// import {useWalletConnect} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../AuthContext';
import firestore from '@react-native-firebase/firestore';
import {GeneralUtil} from '../Util';
import BackgroundTimer from 'react-native-background-timer';

import MetaMaskSDK from '@metamask/sdk';
import {Linking} from 'react-native';

const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'BlockFund',
    url: 'BlockFund',
  },

  storage: {
    enabled: true,
  },
  logging: {
    developerMode: true,
    plaintext: true,
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);

const MetaMaskContextProvider = ({children}) => {
  const {user} = useContext(AuthContext);
  const [ethAddress, setEthAddress] = useState('');
  const [connected, setConnected] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [loader, setLoader] = useState(false);

  const [response, setResponse] = useState();
  const [account, setAccount] = useState();
  const [chain, setChain] = useState();
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    console.log('GET BALANCE => ', ethereum.selectedAddress);

    if (!ethereum.selectedAddress) {
      console.log('NO ADDRESS');
      return;
    }
    const bal = await provider.getBalance(ethereum.selectedAddress);
    console.log('BALANCE', ethers.utils.formatEther(bal));
    setBalance(ethers.utils.formatEther(bal));
  };

  useEffect(() => {
    ethereum.on('chainChanged', chain => {
      setChain(chain);
    });
    ethereum.on('accountsChanged', accounts => {
      setAccount(accounts?.[0]);

      getBalance();
    });
  }, []);

  const connect = async () => {
    try {
      const result = await ethereum.request({method: 'eth_requestAccounts'});
      setAccount(result?.[0]);
      setConnected(true);
      getBalance();
    } catch (e) {
      setConnected(false);
      console.log('ERROR', e);
    }
  };

  const exampleRequest = async () => {
    try {
      const result = await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '31337',
            chainName: 'AWS-Hardhat',
            nativeCurrency: {symbol: 'ETH', decimals: 18},
            rpcUrls: ['http://54.209.148.118:8545'],
          },
        ],
      });
      console.log('RESULT', result);
      setResponse(result);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const sign = async amount => {
    const msgParams = JSON.stringify({
      domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: parseInt(ethereum.chainId, 16),
        // Give a user friendly name to the specific contract you are signing for.
        name: 'BlockFund',
        // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
        verifyingContract: '0x43951f33e746B93919c23fa095DC58c31A3BBccA',
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: '1',
      },

      // Defining the message signing data content.
      message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        contents: 'Hello, BlockFund!',
        attachedMoneyInEth: 0.0001,
        from: {
          name: user.name,
          wallets: [
            ethereum.selectedAddress,
            // '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
            // '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
          ],
        },
        to: [
          {
            name: 'BlockFund',
            wallets: [
              '0x43951f33e746B93919c23fa095DC58c31A3BBccA',
              // '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
              // '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
              // '0xB0B0b0b0b0b0B000000000000000000000000000',
            ],
          },
        ],
      },
      // Refers to the keys of the *types* object below.
      primaryType: 'Mail',
      types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [
          {name: 'name', type: 'string'},
          {name: 'version', type: 'string'},
          {name: 'chainId', type: 'uint256'},
          {name: 'verifyingContract', type: 'address'},
        ],
        // Not an EIP712Domain definition
        Group: [
          {name: 'name', type: 'string'},
          {name: 'members', type: 'Person[]'},
        ],
        // Refer to PrimaryType
        Mail: [
          {name: 'from', type: 'Person'},
          {name: 'to', type: 'Person[]'},
          {name: 'contents', type: 'string'},
        ],
        // Not an EIP712Domain definition
        Person: [
          {name: 'name', type: 'string'},
          {name: 'wallets', type: 'address[]'},
        ],
      },
    });

    var from = ethereum.selectedAddress;

    var params = [from, msgParams];
    var method = 'eth_signTypedData_v4';

    const resp = await ethereum.request({method, params});
    console.log('RESP', resp);
    setResponse(resp);
  };

  const sendTransaction = async () => {
    const to = '0x43951f33e746B93919c23fa095DC58c31A3BBccA';
    const transactionParameters = {
      to, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x5AF3107A4000', // Only required to send ether to the recipient from the initiating external account.
    };

    try {
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      setResponse(txHash);
      console.log('txHash => ', txHash);
    } catch (e) {
      console.log(e);
    }
  };

  // const connector = useWalletConnect();

  const handleMetaMask = async () => {
    setLoader(true);
    // const wallet = Wallet.createRandom();
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
    //       setErrorMessage(error.messa6ge);
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
    // console.log('wallet => ', wallet);
    // if (wallet?.address !== '') {
    //   await AsyncStorage.setItem('Eth_Address', wallet.address);
    //   setTimeout(() => {
    //     setEthAddress(wallet.address);
    //     setConnected(true);
    //   }, 10000);
    //   setLoader(false);
    // }
    // const connection = await connector.connect();
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
        // signMessage,
        response,
        account,
        balance,
      }}>
      <MetaMaskAction.Provider
        value={{
          handleMetaMask,
          addTransaction,
          addFeedback,
          addTicket,
          setLoader,
          getBalance,
          sendTransaction,
          connect,
          exampleRequest,
          sign,
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
