import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormBuilder from 'components/FormBuilder';
import loginFormStructure from './formStructure';

import { AuthenticationContext } from 'context/AuthenticationContext';
import { Typography } from '@mui/material';

interface IProps {
  isLogin: boolean;
}

const Actions = ({ isLogin }: IProps) => {
  return (
    <Button type="submit" variant="outlined" color="success">
      {isLogin ? 'Enter' : 'Signup'}
    </Button>
  );
};

const LoginForm = ({ isLogin }: IProps) => {
  const { login, signup } = useContext(AuthenticationContext);
  return (
    <Box
      sx={{
        width: 500,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: '16px',
      }}
    >
      <Typography align="center" variant="h3" sx={{ marginBottom: '16px' }}>
        {isLogin ? 'Login' : 'Signup'}
      </Typography>
      <FormBuilder
        formStructure={loginFormStructure}
        onSubmit={isLogin ? login : signup}
        actionButtons={<Actions isLogin={isLogin} />}
      />
    </Box>
  );
};

export default LoginForm;
