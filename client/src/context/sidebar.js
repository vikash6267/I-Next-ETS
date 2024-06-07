import { createContext,  useState } from "react";
import React from "react";

export const sidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [minWidth, setMinWidth] = useState(20);
  const [maxWidth, setMaxWidth] = useState(80); 
  return (
    <sidebarContext.Provider
      value={{ minWidth, setMinWidth, maxWidth, setMaxWidth }}
    >
      {children}
    </sidebarContext.Provider>
  );
};


export default SidebarContextProvider;
