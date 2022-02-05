import React from 'react';

import Box from '@mui/material/Box';
import CardWrap from './card';

import { useStyles } from './style';

const Home = () => {
  const classes = useStyles();
  return(
    <Box className={classes.boxCon}>
      <CardWrap text= "heeee" />
    </Box>
  );
}

export default Home;
