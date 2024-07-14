"use client";
import { useContext } from "react";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";
import { ButtonContainer, Container } from "../(home)/home.style";
import { ArrowRight } from "lucide-react";
import CardValue from "../components/card-value/CardValue";
import Footer from "../components/footer/Footer";

const PaymentMethod = () => {
  const { value } = useContext(ValuePixContext);

  const installments = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container>
      <div>
        <Header title="Como você quer pagar ?" />

        <CardValue value={value} installments={installments} />
      </div>

      <Footer />

      <ButtonContainer>
        <ArrowRight size={25} />
      </ButtonContainer>
    </Container>
  );
};

export default PaymentMethod;
