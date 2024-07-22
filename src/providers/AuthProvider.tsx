'use client';

import { createContext, useContext } from 'react';

const defaultValue = {
  isLogin: false,
  user: null,
};

const AuthContext = createContext(defaultValue);

function AuthProvider({ children, value }) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
