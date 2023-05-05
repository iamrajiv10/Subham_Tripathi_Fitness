import { useState, useEffect, useContext, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    fullName:""
  });

  useEffect( () => {
    const data =  localStorage.getItem("user");
    console.warn(data);
    if (data) {
      const parseData = JSON.parse(data);
     
      setAuth({ 
        ...auth,
        fullName: parseData.data.data.fullName,
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
