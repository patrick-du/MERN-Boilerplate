import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Route path="/profile" component={Profile} />
      </UserProvider>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
