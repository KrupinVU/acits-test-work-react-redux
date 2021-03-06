import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};
function useProvideAuth() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("isLoggedIn")))
  }, [])
  return token;
}