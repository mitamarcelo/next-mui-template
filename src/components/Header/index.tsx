import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";

import { NullableHtmlElement } from "types";
import Link from "components/Link";
import { Logo } from "./Header.styles";
import { Typography } from "@mui/material";

const pages = [{ name: "About", href: "/about" }];
const logoProps = [
  { key: "middle", value: { mr: 2, display: { xs: "none", md: "flex" } } },
  { key: "small", value: { flexGrow: 2, display: { xs: "flex", md: "none" } } },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<NullableHtmlElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {logoProps.map(({ key, value }) => (
            <Typography component="div" key={key} noWrap sx={value}>
              <Link href="/" noLinkStyle>
                <Logo
                  src="/images/LogoMitasoft_lg_offyellow.png"
                  alt="LOGO"
                  loading="lazy"
                />
              </Link>
            </Typography>
          ))}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, href }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Link
                    sx={{ my: 2, color: "black", display: "block" }}
                    href={href}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, href }) => (
              <Link
                key={name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                href={href}
              >
                <Typography textAlign="center">{name}</Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
