import { createContext, useContext, useEffect, useState } from "react"; 


const UserContext = createContext({});

    export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);
    
    localStorage.setItem('devburger:userData', JSON.stringify(userInfo));

  };

    const logout = () => {
    localStorage.removeItem('devburger:userData');
    setUserInfo({});
  };
  useEffect(() => {
    const userinfolocalStorage = localStorage.getItem('devburger:userData');
    if (userinfolocalStorage) {
      setUserInfo(JSON.parse(userinfolocalStorage));
    }
  }
  , []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>{children}</UserContext.Provider>
  );
};

 export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid context');
  }
  return context;
};