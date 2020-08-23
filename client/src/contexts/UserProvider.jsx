import React, { createContext, useState, useEffect } from 'react';
import api from '../api';
const Context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      await api
        .get('/user', { withCredentials: true })
        .then((res) => {
          const userData = res && res.data;
          setUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUser();
  }, []);

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

UserProvider.Context = Context;

export default UserProvider;
