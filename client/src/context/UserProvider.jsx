import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [phone, setPhone] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();

  return (
    <UserContext.Provider
      value={{ phone, setPhone, userName, setUserName, email, setEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
