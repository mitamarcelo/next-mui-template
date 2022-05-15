import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';

import { AuthenticationContext } from 'context/AuthenticationContext';
import Link from 'components/Link';
import NotImplementedAlert from 'components/Alert/NotImplementedAlert';

import { HeaderWrapper, ProfileImage, ProfileInfoWrapper } from './Header.styles';

const Header = () => {
  const { isAuthenticated, logout, user } = useContext(AuthenticationContext);
  const [nIAlertOpen, setNIAlertOpen] = useState(false);

  const handleLogout = () => {
    if (isAuthenticated) logout();
  };

  return (
    <HeaderWrapper>
      <ProfileImage src="/images/user_placeholder.png" alt="Profile Image" />
      <ProfileInfoWrapper>
        <Typography variant="h2" component="h1" color="white">
          {user ? user.name : 'User Name'}
        </Typography>
        <NotImplementedAlert
          message="Editing soon will be available!"
          open={nIAlertOpen}
          onClose={() => setNIAlertOpen(false)}
        />
        <Link
          onClick={() => setNIAlertOpen(true)}
          sx={{ my: 2, color: 'white', display: 'block' }}
          href="/"
        >
          <Typography>Editar perfil</Typography>
        </Link>
        <Link onClick={handleLogout} sx={{ my: 1, color: 'white', display: 'block' }} href="/login">
          <Typography>Sair</Typography>
        </Link>
      </ProfileInfoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
