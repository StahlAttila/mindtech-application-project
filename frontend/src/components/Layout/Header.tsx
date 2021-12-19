import React from 'react'
import { Typography } from '@mui/material';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Typography className={classes.logo} variant='h5' component="h1" >Hungarian COVID Statistics</Typography>
    </header>
  )
}

export default Header
