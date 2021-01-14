import React from 'react';
import Chats from '../Components/Chats/Chats';

const ChatPage = () => {
  return (
    <div>
      <Chats
        name='Natasha'
        message='Hey! how are you'
        timestamp='35 minutes ago'
        profilPic='https://i.pinimg.com/originals/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7.jpg'
      />
      <Chats
        name='Sarah'
        message='whats up'
        timestamp='40 minutes ago'
        profilPic='https://www.czech-single-women.com/foto/eu/inzeraty_zeny/detail/2b7a9e49f1e84574a443c72e85fde254.jpg?iid=32165&fid=1&t=en'
      />
      <Chats
        name='Ellen'
        message='Ola!'
        timestamp='3 days ago'
        profilPic='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
      />
      <Chats
        name='Sandra'
        message='Heyyyy! how are you'
        timestamp='1 week ago'
        profilPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KX_WNlCgvSTmPyA14DXF4inNInrmxrjtkA&usqp=CAU'
      />
    </div>
  );
};

export default ChatPage;
