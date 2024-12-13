import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const updateUserList = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const refreshUserList = (newUsers) => {
    setUsers([...newUsers]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, updateUserList, refreshUserList }}>
      {children}
    </UserContext.Provider>
  );
};