import { Check } from "lucide-react";
import { Container } from "../(home)/home.style";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import { Successful } from "./payment-successful.style";

const PaymentSuccessful = () => {
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
