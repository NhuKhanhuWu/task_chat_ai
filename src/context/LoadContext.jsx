/** @format */

import { createContext, useContext, useState } from "react";

const LoadContext = createContext();

function LoadProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadContext.Provider>
  );
}

function useLoad() {
  const context = useContext(LoadContext);
  if (!context) {
    throw new Error("LoadContext was used outside of the LoadProvider");
  }

  return context;
}

export { LoadProvider, useLoad };
