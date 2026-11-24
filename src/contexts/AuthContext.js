import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const INITIAL_USERS = [
  {
    id: '1',
    name: 'Caio Silva de Souza',
    email: 'admin@vertex.com',
    phone: '(27) 99999-0000',
    password: '123456',
  },
];

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    try {
      const found = users.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
      );
      if (found) {
        setUser(found);
        return { ok: true };
      }
      return { ok: false };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  const registerUser = ({ name, email, phone, password }) => {
    const newUser = {
      id: String(Date.now()),
      name,
      email: email.trim().toLowerCase(),
      phone,
      password,
    };
    setUsers((prev) => [...prev, newUser]);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, user, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
