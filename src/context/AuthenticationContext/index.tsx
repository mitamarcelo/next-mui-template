import React, { useState, useEffect, createContext } from 'react';
import useApi from 'hooks/useApi';

export interface ILoginParams {
  email: string;
  password: string;
}

interface IAuthenticationContext {
  login: (params: Record<string, any>) => void;
  logout: () => void;
  signup: (params: Record<string, any>) => void;
  getToken: () => string | null;
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
  isAuthenticated: false,
  error: '',
  userLoaded: false,
  previousRoute: '',
  setPreviousRoute: () => null,
});

const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
  const { post } = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [userLoaded, setUserLoaded] = useState(false);
  const [previousRoute, setPreviousRoute] = useState('/');

  useEffect(() => {
    getAuthentication();
    window.addEventListener('storage', getAuthentication, false);
    setUserLoaded(true);
  }, []);

  const getToken = () => localStorage.getItem('apiKey');

  const getAuthentication = () => {
    const token = getToken();
    setIsAuthenticated(!!token && token.length > 0);
  };

  const login = async (loginParams: Record<string, any>) => {
    const response = await post('/login', loginParams);
    const body = await response.json();
    if (response.status === 200) {
      localStorage.setItem('apiKey', `Bearer ${response.headers.get('Authorization')}`);
      localStorage.setItem('user', JSON.stringify(body));
      setIsAuthenticated(true);
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
    const response = await post('/signup', loginParams);
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
