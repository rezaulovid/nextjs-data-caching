"use client";
import { use } from "react";
import React, { createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  return <UserContext.Provider value= {{user: 'jamai babu', isLoggedId:true}} >{children}</UserContext.Provider>;
};

export default UserProvider;
