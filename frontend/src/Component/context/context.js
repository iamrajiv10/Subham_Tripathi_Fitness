import { useState, useEffect, useContext, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
  });

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parseData = JSON.parse(data);
      console.warn(parseData.fullName);


      setAuth({
        ...auth,
        fullName: parseData.fullName,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Costum Hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
