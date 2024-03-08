import { createContext, useContext, ReactNode } from 'react';

interface IdContextType {
  checkItemId: (key: string) => void;
}

const defaultIdContext: IdContextType = {
  checkItemId: () => {},
};

const IdContext = createContext(defaultIdContext);
export const useId = () => useContext(IdContext);

export const IdProvider = ({ children }: { children: ReactNode }) => {
  return (
    <IdContext.Provider
      value={{
        checkItemId: (key) => {
          localStorage.setItem('itemKey', key);
        },
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
