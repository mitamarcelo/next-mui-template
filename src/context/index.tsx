import React, { createContext } from 'react';
import AuthenticationProvider from './AuthenticationContext';
import CharactersProvider from './CharactersContext';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalContext.Provider value={{}}>
      <AuthenticationProvider>
        <CharactersProvider>{children}</CharactersProvider>
      </AuthenticationProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
