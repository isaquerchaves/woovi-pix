"use client"
import { useContext } from "react";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";

const PaymentMethod = () => {
    const {value} = useContext(ValuePixContext);
    
    return ( 
        <>
            <Header title="João, como você quer pagar ?" />
            <p>{value}</p>
            
        </>
     );
}
 
export default PaymentMethod;