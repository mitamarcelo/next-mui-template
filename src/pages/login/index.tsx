import React, { useContext, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';

import LoginForm from 'components/LoginForm';
import { AuthenticationContext } from 'context/AuthenticationContext';

const Login = () => {
  const containerStyles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const { isAuthenticated, error, previousRoute } = useContext(AuthenticationContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(previousRoute);
    }
  });

  return (
    <Container maxWidth="sm" sx={containerStyles}>
      {!!error && <Alert severity="error">{error}</Alert>}
      <LoginForm isLogin />
    </Container>
  );
};

export default Login;
