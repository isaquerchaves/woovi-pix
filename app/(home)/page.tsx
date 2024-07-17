"use client";
import { useContext, useState } from "react";
import Header from "../components/header/header";
import { Input } from "../components/input/input";
import { ButtonContainer, Container } from "./home.style";
import { ArrowRight } from "lucide-react";
import { ValuePixContext } from "../context/value";
import { useRouter } from "next/navigation";
import Footer from "../components/footer/Footer";

export default function Home() {
  const router = useRouter();
  const { value, updateValue } = useContext(ValuePixContext);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInputValue(newValue);
  };

  const handleButtonClick = () => {
    if (inputValue > 0) {
      updateValue(inputValue);
      setInputValue(0);
      router.push(`/payment-method`);
    } else {
      alert("Por favor, insira um valor válido para a transferência.");
    }
  };

  return (
    <Container>
      <div>
        <Header title="Qual é o valor da transferência?" />
        <Input type="number" placeholder="Ex: 1000" onChange={handleChange} />
      </div>

      <Footer />

      <ButtonContainer onClick={handleButtonClick}>
        <ArrowRight size={25} />
      </ButtonContainer>
    </Container>
  );
}
