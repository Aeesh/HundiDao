import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './style';
import hdao from '../hdao.png';


export  const ButtonAppBar = (props) =>{
  const { onClick, account } = props;
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={hdao} className={classes.img} />
          </IconButton>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={onClick}
          >
            {account}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
