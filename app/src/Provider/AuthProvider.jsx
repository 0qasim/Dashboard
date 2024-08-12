import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {jwtDecode} from "jwt-decode";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [cookie, setCookie, removeCookie] = useCookies();

  const login = (tokenStr) => {
    console.log("Token String:", tokenStr);
    if ( tokenStr) {
      setToken(tokenStr); 
      const decodedToken = jwtDecode(tokenStr);  // Make sure it's a string
        const { exp } = decodedToken;
     console.log(decodedToken)
        if (exp) {
            setCookie("jwt", tokenStr, {
                path: "/",
                maxAge: exp,
                sameSite: true,
            });
        }
        console.log("token", token);
        return;
        
       
    } logout();
};

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };
  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      const user = jwtDecode(cookie.jwt);
      setUser(user);
    }
  }, [cookie]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
