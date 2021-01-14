import React from 'react';
import './chats.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Chats = ({ name, message, timestamp, profilPic }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar src={profilPic} alt={name} />
        <div className='chat_message'>
          <h4>{name}</h4>
          <p>{message}</p>
        </div>
        <h5 className='chat__timestamp'>{timestamp}</h5>
      </div>
    </Link>
  );
};

export default Chats;
