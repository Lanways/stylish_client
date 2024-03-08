import { createContext, useContext, ReactNode, useState } from 'react';

interface IdContextType {
  storeTotalPrice: (key: string) => void;
  toTalPrice: string;
}

const defaultIdContext: IdContextType = {
  storeTotalPrice: () => {},
  toTalPrice: '',
};

const PriceContext = createContext(defaultIdContext);
export const usePrice = () => useContext(PriceContext);

export const PriceProvider = ({ children }: { children: ReactNode }) => {
  const [toTalPrice, setTotalPrice] = useState('');

  return (
    <PriceContext.Provider
      value={{
        toTalPrice,
        storeTotalPrice: (price) => {
          localStorage.setItem('totalPrice', price);
          setTotalPrice(price);
        },
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
