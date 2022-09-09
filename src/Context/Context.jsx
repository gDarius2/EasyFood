import { createContext, useState, FC } from "react";

const initialStore = { item: [] };

export const ContextWrapper = createContext({
  context: initialStore,
  updateContext: () => {},
});

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(initialStore);

  const updateContext = (key, value) => {
    setContext((prevContext) => {
      const newContext = {
        ...prevContext,
        [key]: value,
      };
      return newContext;
    });
  };

  return (
    <ContextWrapper.Provider value={{ context, updateContext }}>
      {children}
    </ContextWrapper.Provider>
  );
};
