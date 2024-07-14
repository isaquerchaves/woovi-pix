"use client";
import { createContext, ReactNode, useState } from "react";

interface ValuePix {
  value: number;
  installmentCount: number;
  interestRate: number; // Nova propriedade para a taxa de juros
  updateValue: (newValue: number) => void;
  updateInstallmentCount: (count: number) => void;
}

export const ValuePixContext = createContext<ValuePix>({
  value: 0,
  installmentCount: 0,
  interestRate: 0.005, // Valor padrão da taxa de juros
  updateValue: (newValue: number) => {},
  updateInstallmentCount: (count: number) => {},
});

export const ValuePixProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number>(0);
  const [installmentCount, setInstallmentCount] = useState<number>(0);
  const interestRate = 0.005; // Definição da taxa de juros

  const updateValue = (newValue: number) => {
    setValue(newValue);
  };

  const updateInstallmentCount = (count: number) => {
    setInstallmentCount(count);
  };

  return (
    <ValuePixContext.Provider
      value={{
        value,
        updateValue,
        installmentCount,
        updateInstallmentCount,
        interestRate,
      }}
    >
      {children}
    </ValuePixContext.Provider>
  );
};
