import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link, useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  button: {
    color: 'lightGrey',
    padding: '20px',
  },
});

const Header = ({ backButton }) => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <div className='header'>
      {backButton ? (
        <IconButton className={classes.button}>
          <KeyboardArrowLeftIcon
            fontSize='large'
            onClick={() => history.replace(backButton)}
          />
        </IconButton>
      ) : (
        <IconButton className={classes.button}>
          <PersonIcon fontSize='large' />
        </IconButton>
      )}
      <Link to='/'>
        <img
          className='header__logo'
          src='https://www.pngkit.com/png/full/55-558256_tinder-logo-transparent.png'
          alt='logo'
        />
      </Link>
      <Link to='/chat'>
        <IconButton className={classes.button}>
          <ForumIcon fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
