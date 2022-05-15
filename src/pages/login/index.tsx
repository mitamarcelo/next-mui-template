import React, { useContext, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';

import LoginForm from 'components/LoginForm';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { pageCenteredContainer } from 'pageStyles/global.styles';
const Login = () => {
  const { isAuthenticated, error, previousRoute } = useContext(AuthenticationContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(previousRoute);
    }
  });

  return (
    <Container maxWidth="sm" sx={pageCenteredContainer}>
      <Container>
        {!!error && (
          <Alert severity="error" sx={{ marginBottom: '16px' }}>
            {error}
          </Alert>
        )}
        <LoginForm />
      </Container>
    </Container>
  );
};

export default Login;
