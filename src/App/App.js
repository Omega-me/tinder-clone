import React from 'react';
import { Header, HomePage, ChatPage, MessagePage } from './index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <HomePage />
          </Route>
          <Route exact path='/chat'>
            <Header backButton='/' />
            <ChatPage />
          </Route>
          <Route path='/chat/:person'>
            <Header backButton='/chat/' />
            <MessagePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
