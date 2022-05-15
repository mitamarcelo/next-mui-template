import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormBuilder from 'components/FormBuilder';
import { loginFormStructure, signupFormStructure } from './formStructure';

import { AuthenticationContext } from 'context/AuthenticationContext';
import { Typography } from '@mui/material';

interface IProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Actions = ({ isLogin, setIsLogin }: IProps) => {
  return (
    <>
      <Button type="submit" variant="outlined" color="success">
        {isLogin ? 'Entrar' : 'Cadastrar'}
      </Button>
      <Button
        variant="text"
        onClick={() => setIsLogin((p: boolean) => !p)}
        sx={{ alignSelf: 'center' }}
      >
        {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entrar'}
      </Button>
    </>
  );
};

const LoginForm = () => {
  const { login, signup } = useContext(AuthenticationContext);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box
      sx={{
        width: 500,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '15px',
        padding: '30px',
      }}
    >
      <Typography
        align="center"
        variant="h3"
        sx={{ marginBottom: '16px', textTransform: 'uppercase' }}
      >
        {isLogin ? 'Login' : 'Cadastrar'}
      </Typography>
      <FormBuilder
        formStructure={isLogin ? loginFormStructure : signupFormStructure}
        onSubmit={isLogin ? login : signup}
        actionButtons={<Actions isLogin={isLogin} setIsLogin={setIsLogin} />}
      />
    </Box>
  );
};

export default LoginForm;
