"use client"
import { createContext, ReactNode, useState } from "react";

interface ValuePix {
    value: number;
    updateValue: (newValue:number) => void;
}

export const ValuePixContext = createContext<ValuePix>({
    value: 0,
    updateValue: (newValue: number) => {},
})

export const ValuePixProvider = ({children}: {children: ReactNode}) => {
    const [value, setValue] = useState<number>(0);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <ValuePixContext.Provider value={{value,updateValue }}>
            {children}
        </ValuePixContext.Provider>
    )
}