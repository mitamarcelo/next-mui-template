import React, { useState, MouseEvent, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import { AuthenticationContext } from 'context/AuthenticationContext';
import { NullableHtmlElement } from 'types';
import Link from 'components/Link';
import { Logo } from './Header.styles';

const pages = [
  { name: 'About', href: '/about', authenticated: false },
  { name: 'Authenticated Test', href: '/authenticatedExample', authenticated: true },
];
const logoProps = [
  { key: 'middle', value: { mr: 2, display: { xs: 'none', md: 'flex' } } },
  { key: 'small', value: { flexGrow: 2, display: { xs: 'flex', md: 'none' } } },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<NullableHtmlElement>(null);
  const { isAuthenticated, logout } = useContext(AuthenticationContext);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    if (isAuthenticated) logout();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {logoProps.map(({ key, value }) => (
            <Typography component="div" key={key} noWrap sx={value}>
              <Link href="/" noLinkStyle>
                <Logo src="/images/LogoMitasoft_lg_offyellow.png" alt="LOGO" loading="lazy" />
              </Link>
            </Typography>
          ))}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages
                .filter(({ authenticated }) => authenticated === isAuthenticated)
                .map(({ name, href }) => (
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Link sx={{ my: 2, color: 'black', display: 'block' }} href={href}>
                      <Typography textAlign="center">{name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              <Link
                onClick={handleLogout}
                sx={{ my: 2, color: 'black', display: 'block' }}
                href="/login"
              >
                <Typography textAlign="center">{isAuthenticated ? 'Logout' : 'Login'}</Typography>
              </Link>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages
              .filter(({ authenticated }) => authenticated === isAuthenticated)
              .map(({ name, href }) => (
                <Link
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{ m: 2, color: 'white', display: 'block' }}
                  href={href}
                >
                  <Typography textAlign="center">{name}</Typography>
                </Link>
              ))}
            <Link
              onClick={handleLogout}
              sx={{ m: 2, color: 'white', display: 'block' }}
              href="/login"
            >
              <Typography textAlign="center">{isAuthenticated ? 'Logout' : 'Login'}</Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
