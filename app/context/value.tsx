"use client";
import { createContext, ReactNode, useState } from "react";

interface ValuePix {
  value: number;
  installmentCount: number;
  interestRate: number;
  remainingValue: number;
  updateValue: (newValue: number) => void;
  updateInstallmentCount: (count: number) => void;
  updateRemainingValue: (value: number) => void;
}

export const ValuePixContext = createContext<ValuePix>({
  value: 0,
  installmentCount: 0,
  interestRate: 0.005,
  remainingValue: 0,
  updateValue: (newValue: number) => {},
  updateInstallmentCount: (count: number) => {},
  updateRemainingValue: (value: number) => {},
});

export const ValuePixProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number>(0);
  const [installmentCount, setInstallmentCount] = useState<number>(0);
  const [remainingValue, setRemainingValue] = useState<number>(0);
  const interestRate = 0.005; // Definição da taxa de juros

  const updateValue = (newValue: number) => {
    setValue(newValue);
  };

  const updateInstallmentCount = (count: number) => {
    setInstallmentCount(count);
  };

  const updateRemainingValue = (value: number) => {
    setRemainingValue(value);
  };

  return (
    <ValuePixContext.Provider
      value={{
        value,
        updateValue,
        installmentCount,
        updateInstallmentCount,
        interestRate,
        remainingValue,
        updateRemainingValue,
      }}
    >
      {children}
    </ValuePixContext.Provider>
  );
};
