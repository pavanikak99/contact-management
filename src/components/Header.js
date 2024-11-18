import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

import { AddCircleOutline, Login } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Contact Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Contacts
        </Button>
        <Button
          color="inherit"
          startIcon={<AddCircleOutline />}
          component={Link}
          to="src\components\AddContact.js"
        >
          Add
        </Button>
        <IconButton color="inherit" component={Link} to="/signin">
          {/* <Login /> */}

        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;