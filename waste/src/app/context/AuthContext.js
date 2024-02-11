import {useContext,useState,useEffect, createContext} from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState('Clint');
  
  return(
    <AuthContext.Provider value={(user)}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}



















