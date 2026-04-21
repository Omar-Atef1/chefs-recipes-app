import { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userEmail: '',
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');

  const loginHandler = (email) => {
    setUserEmail(email);
  };

  const logoutHandler = () => {
    setUserEmail('');
  };

  const contextValue = useMemo(
    () => ({
      isLoggedIn: !!userEmail,
      userEmail,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [userEmail]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
