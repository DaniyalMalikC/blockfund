import React, {createContext, useEffect, useState} from 'react';

const ProfileContextProvider = ({children}) => {
  return (
    <ProfileContext.Provider value={{}}>
      <ProfileAction.Provider value={{}}>{children}</ProfileAction.Provider>
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;

// Profile Context
export const ProfileContext = createContext();
export const ProfileAction = createContext();
