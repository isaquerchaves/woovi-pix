"use client";
import { Check } from "lucide-react";
import { Container } from "../(home)/home.style";
import Footer from "../_components/footer/Footer";
import Header from "../_components/header/header";
import { Successful } from "./payment-successful.style";
import { useContext, useEffect, useState } from "react";
import { ValuePixContext } from "../_context/value";
import { useRouter } from "next/navigation";
import Loading from "../_components/loading/Loading";

const PaymentSuccessful = () => {
  const router = useRouter();
  const { value } = useContext(ValuePixContext);
  const [loading, setLoading] = useState(true);

  // Verificar se tem um valor
  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
