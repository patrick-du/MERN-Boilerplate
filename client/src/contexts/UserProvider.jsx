import React, { createContext, useState, useEffect } from 'react';
import api from '../api';
const Context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    api
      .get('/profile', { withCredentials: true })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

UserProvider.Context = Context;
export default UserProvider;
