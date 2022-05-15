import React, { useState, useEffect, createContext } from 'react';
import useApi from 'hooks/useApi';

import { camelizeNestedKeys, snakefyKeys } from 'utils/helpers';
import { PropsWithChildren } from 'types';

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  createdAt: string;
  id: number;
  name: string;
  dateOfBirth: string;
}

interface IAuthenticationContext {
  login: (params: Record<string, any>) => void;
  logout: () => void;
  signup: (params: Record<string, any>) => void;
  getToken: () => string | null;
  user?: IUser;
  isAuthenticated: boolean;
  error: string;
  userLoaded: boolean;
  previousRoute: string;
  setPreviousRoute: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  login: (params: Record<string, any>) => null,
  logout: () => null,
  signup: (params: Record<string, any>) => null,
  getToken: () => null,
  user: undefined,
  isAuthenticated: false,
  error: '',
  userLoaded: false,
  previousRoute: '',
  setPreviousRoute: () => null,
});

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const { post } = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [userLoaded, setUserLoaded] = useState(false);
  const [previousRoute, setPreviousRoute] = useState('/');
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    getAuthentication();
    window.addEventListener('storage', getAuthentication, false);
    setUserLoaded(true);
    return () => window.removeEventListener('storage', getAuthentication);
  }, []);

  const getToken = () => localStorage.getItem('apiKey');
  const getUser = () =>
    JSON.parse((typeof window !== 'undefined' ? localStorage.getItem('user') : null) || '');

  const getAuthentication = () => {
    const token = getToken();
    const authenticated = !!token && token.length > 0;
    setIsAuthenticated(authenticated);
    if (authenticated) {
      setUser(getUser());
    }
  };

  const login = async (loginParams: Record<string, any>) => {
    const response = await post('/login', loginParams);
    const body = await response.json();
    const formattedBody = camelizeNestedKeys(body);
    if (response.status === 200) {
      localStorage.setItem('apiKey', `Bearer ${response.headers.get('Authorization')}`);
      localStorage.setItem('user', JSON.stringify(formattedBody));
      setIsAuthenticated(true);
      setUser(getUser());
      setError('');
    } else {
      if (body.error.type === 'credential_invalid') {
        setError('Usuário ou senha errados, por favor, tente novamente!');
      } else {
        setError('Ocorreu um erro ao fazer o seu login, por favor, tente novamente!');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('apiKey');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const signup = async (loginParams: Record<string, any>) => {
    const response = await post('/signup', snakefyKeys(loginParams));
    const body = await response.json();
    if (response.status === 200) {
      localStorage.setItem('apiKey', `Bearer ${response.headers.get('Authorization')}`);
      localStorage.setItem('user', JSON.stringify(body));
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Ocorreu um erro ao fazer o seu cadastro, por favor, tente novamente!');
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        login,
        logout,
        signup,
        getToken,
        isAuthenticated,
        error,
        userLoaded,
        previousRoute,
        setPreviousRoute,
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
