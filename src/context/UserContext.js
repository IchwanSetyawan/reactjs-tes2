import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <userContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
