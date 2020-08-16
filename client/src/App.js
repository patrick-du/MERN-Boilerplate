import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Route path="/dashboard" component={Dashboard} />
      </UserProvider>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
