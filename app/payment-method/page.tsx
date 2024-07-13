"use client"
import { useContext } from "react";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";
import { ButtonContainer, Container } from "../(home)/home.style";
import { ArrowRight } from 'lucide-react';
import CardValue from "../components/card-value/CardValue";
import Footer from "../components/footer/Footer";

const PaymentMethod = () => {
    const {value} = useContext(ValuePixContext);

    return ( 
        <Container>
            <div>
                <Header title="João, como você quer pagar ?" />

                <CardValue value={value} />

            </div>

            <Footer />
            
            <ButtonContainer>
                <ArrowRight size={25} />
            </ButtonContainer>
            
        </Container>
     );
}
 
export default PaymentMethod;