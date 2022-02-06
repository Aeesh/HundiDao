import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import FullWidthTextField from './form';

import { useStyles } from './style';


const Home = (props) => {
  const classes = useStyles();

  const {text, address, username, amount, paymentInterval, circleName, handleChange } = props;
  return (
    <Box>
      <Box className={classes.cardWrap}>
        <Card className={classes.cards}>
          <CardContent>
          <Typography> {text} </Typography>
          </CardContent>
          <CardContent>
          <Stack spacing={2} direction="row">
            <FullWidthTextField name="username" value={username} handleChange={handleChange} fieldText="Username"  placeholder="Username"/>
            <FullWidthTextField name="address" value={address} handleChange={handleChange} fieldText="ETH Address"  placeholder="ETH Address"/>
            </Stack>
          </CardContent>
          <CardContent>
          <Stack spacing={2} direction="row">
            <FullWidthTextField name="circle" value={circleName} handleChange={handleChange} fieldText="Circle Name"  placeholder="Circle Name"/>
            <FullWidthTextField name="amount" value={amount} handleChange={handleChange} fieldText="Payment Amount"  placeholder="Payment Amount"/>
            </Stack>
          </CardContent>
          <CardContent>
          <Stack spacing={2} direction="row">
            <FullWidthTextField name="interval" value={paymentInterval} handleChange={handleChange} fieldText="Payment Interval"  placeholder="Payment Interval"/>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Home;
