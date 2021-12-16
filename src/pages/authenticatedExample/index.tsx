import React from 'react';
import { useRouter } from 'next/router';
import useAuthenticated from 'hooks/useAthenticated';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AuthenticatedExample = () => {
  const router = useRouter();
  useAuthenticated(router);

  return (
    <Container>
      <Typography variant="h2">This is an Authenticated example</Typography>
    </Container>
  );
};

export default AuthenticatedExample;
