"use client";
import { useContext, useState, useEffect } from "react";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";
import { ButtonContainer, Container } from "../(home)/home.style";
import { ArrowRight } from "lucide-react";
import CardValue from "../components/card-value/CardValue";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";

const PaymentMethod = () => {
  const router = useRouter();
  const { value, installmentCount } = useContext(ValuePixContext);
  const [selectedInstallment, setSelectedInstallment] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  const installments = [1, 2, 3, 4, 5, 6, 7];

  const handleButtonClick = () => {
    if (selectedInstallment === null) {
      alert("Por favor, selecione uma opção de parcela.");
      return;
    }
    router.push(`/payment`);
  };

  return (
    <Container>
      <div>
        <Header title="Como você quer pagar ?" />

        <CardValue
          value={value}
          installments={installments}
          selectedInstallment={selectedInstallment}
          setSelectedInstallment={setSelectedInstallment}
        />
      </div>

      <Footer />

      <ButtonContainer onClick={handleButtonClick}>
        <ArrowRight size={25} />
      </ButtonContainer>
    </Container>
  );
};

export default PaymentMethod;
