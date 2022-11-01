import { Box } from '@mui/material';
import { APP_NAME } from 'constants/app-info';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Box
      borderBottom={'0.5px solid grey'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth="100vw">
      <Link to="/home">
        <Box margin={2} width="151px" height="px" component={'img'} src={logo} alt={APP_NAME} />
      </Link>
    </Box>
  );
};

export default Header;
