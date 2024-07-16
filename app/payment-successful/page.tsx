"use client";
import { Check } from "lucide-react";
import { Container } from "../(home)/home.style";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import { Successful } from "./payment-successful.style";
import { useContext, useEffect } from "react";
import { ValuePixContext } from "../context/value";
import { useRouter } from "next/navigation";

const PaymentSuccessful = () => {
  const router = useRouter();
  const { value } = useContext(ValuePixContext);

  // Verificar se tem um valor
  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  return (
    <Container>
      <Header title="A Woovi agradeçe pela preferência!" />

      <Successful>
        <Check
          size={60}
          color="white"
          style={{
            backgroundColor: "#03d69d",
            padding: "4px",
            borderRadius: "50%",
          }}
        />

        <p>Pagamento realizado com sucesso</p>
      </Successful>

      <Footer />
    </Container>
  );
};

export default PaymentSuccessful;
