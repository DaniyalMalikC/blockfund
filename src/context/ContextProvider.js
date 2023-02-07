import React from 'react';

import AuthContextProvider from './AuthContext';
import ProfileContextProvider from './ProfileContext';
import ModalizeContextProvider from './ModalizeContext';

const ContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      <ProfileContextProvider>
        <ModalizeContextProvider>{children}</ModalizeContextProvider>
      </ProfileContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
