import React from 'react';

import AuthContextProvider from './AuthContext';
import MetaMaskContextProvider from './MetaMaskContext';
import ProfileContextProvider from './ProfileContext';
import ModalizeContextProvider from './ModalizeContext';

const ContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      <MetaMaskContextProvider>
        <ProfileContextProvider>
          <ModalizeContextProvider>{children}</ModalizeContextProvider>
        </ProfileContextProvider>
      </MetaMaskContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
