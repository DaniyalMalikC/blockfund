import React, {createContext, useEffect, useRef, useState} from 'react';

const ModalizeContextProvider = ({children}) => {
  const modalizeTransaction = useRef(null);
  const modalizeEditProfile = useRef(null);

  return (
    <ModalizeContext.Provider
      value={{
        modalizeTransaction,
        modalizeEditProfile,
      }}>
      <ModalizeAction.Provider value={{}}>{children}</ModalizeAction.Provider>
    </ModalizeContext.Provider>
  );
};

export default ModalizeContextProvider;

// People News Context
export const ModalizeContext = createContext();
export const ModalizeAction = createContext();
