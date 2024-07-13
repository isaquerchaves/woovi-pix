"use client"
import { useContext } from "react";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";
import { Container } from "../(home)/home.style";

const PaymentMethod = () => {
    const {value} = useContext(ValuePixContext);

    return ( 
        <Container>
            <Header title="João, como você quer pagar ?" />
            <p>{value}</p>
            
        </Container>
     );
}
 
export default PaymentMethod;