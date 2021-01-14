import React from 'react';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
const useStyle = makeStyles({
  button1: {
    color: '#f5b748',
  },
  button2: {
    color: '#ec5e6f',
  },
  button3: {
    color: '#62b4f9',
  },
  button4: {
    color: '#76e2b3',
  },
  button5: {
    color: '#915dd1',
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div className='footer'>
      <IconButton className={classes.button1}>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.button2}>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.button3}>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.button4}>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.button5}>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default Footer;
