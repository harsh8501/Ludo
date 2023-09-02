import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [phone,setPhone] = useState();
    const [userName, setUserName] = useState();
    
    return (
        <UserContext.Provider value={{ phone, setPhone, userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;