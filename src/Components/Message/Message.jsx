import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Message.css';
import { useParams } from 'react-router-dom';

const Message = () => {
  const param = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image:
        'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
      message: 'whats up',
    },
    {
      name: 'Ellen',
      image:
        'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
      message: 'how is it going',
    },
    {
      message: 'whats up',
    },
  ]);

  const messageHandler = e => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput('');
  };

  return (
    <div className='message'>
      <p className='message__p'>You matched with {param.person} on 10/08/20</p>

      {messages.map(message => (
        <div className='message__container'>
          {message.name ? (
            <div className='message__message'>
              <Avatar src={message.image} alt={message.name} />
              <p>{message.message}</p>
            </div>
          ) : (
            <div className='message__me'>
              <p>{message.message}</p>
            </div>
          )}
        </div>
      ))}

      <form className='message__send'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type='text'
          placeholder='Type a message...'
        />
        <button onClick={messageHandler} type='submit'>
          send
        </button>
      </form>
    </div>
  );
};

export default Message;
