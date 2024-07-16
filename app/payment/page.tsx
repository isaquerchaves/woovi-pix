"use client";
import React, { useContext, useState, useEffect } from "react";
import { ValuePixContext } from "../context/value";
import { useRouter } from "next/navigation";
import { ButtonContainer, Container } from "../(home)/home.style";
import Header from "../components/header/header";
import {
  calculateInstallmentWithInterest,
  formatCurrency,
} from "../helpers/value";
import QRCode from "react-qr-code";
import { ArrowRight, ChevronUp, Circle, Files } from "lucide-react";
import { PaymentContainer } from "./payment.style";
import Footer from "../components/footer/Footer";

const Payment = () => {
  const router = useRouter();
  const { value, installmentCount, interestRate, updateRemainingValue } =
    useContext(ValuePixContext);
  const [formattedDate, setFormattedDate] = useState("");

  // Verificar se tem um valor
  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  // Calculo com o valor das parcelas
  const valueCalculated = calculateInstallmentWithInterest(
    value,
    interestRate,
    installmentCount
  );

  // Calculo com valor total
  const valueTotalCalculated =
    calculateInstallmentWithInterest(value, interestRate, installmentCount) *
    installmentCount;

  // Calculo com valor restante
  const remainingValue = valueTotalCalculated - valueCalculated;
  // Calculo do valor da primeira entrada e do restante
  const firstInstallmentValue = value / installmentCount;

  // Salvar remainingValue no contexto
  useEffect(() => {
    updateRemainingValue(remainingValue);
  }, [remainingValue, updateRemainingValue]);

  // Função para formatar a data no formato desejado e adicionar 1 hora
  const formatDate = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1);
    const formattedDate = currentDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedDate;
  };

  useEffect(() => {
    setFormattedDate(formatDate());
  }, []);

  const handleButtonClick = () => {
    router.push(`/payment-card`);
  };

  return (
    <PaymentContainer>
      <Container>
        <Header
          title={`Pague a entrada de ${formatCurrency(
            firstInstallmentValue
          )} pelo Pix`}
        />
        <div
          style={{
            height: "332px",
            margin: "0 auto",
            width: "332px",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="web"
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="items-center">
          <div className="copy-code">
            <p>Clique para copiar QR CODE</p>
            <Files color="#FFFFFF" size={20} />
          </div>
        </div>

        <div className="identifier">
          <p className="title">Prazo de pagamento:</p>
          <p className="sub-title">{formattedDate}</p>
        </div>

        <div className="installments-section">
          <div className="installments-itens">
            <div className="pix">
              <div className="circle-connector">
                <Circle size={16} color="#03D69D" />
              </div>
              <p>1ª entrada no Pix</p>
            </div>
            <span>{formatCurrency(valueCalculated)}</span>
          </div>
          <div className="installments-itens">
            <div className="pix">
              <Circle size={16} color="#E5E5E5" />
              <p>2ª no cartão</p>
            </div>
            <span>{formatCurrency(remainingValue)}</span>
          </div>
        </div>

        <div className="section-cet">
          <p>CET: 0,5%</p>
          <span>Total: {formatCurrency(valueTotalCalculated)}</span>
        </div>

        <div className="section-cet">
          <span>Como funciona?</span>
          <ChevronUp color="#4D4D4D" />
        </div>

        <div className="identifier">
          <p className="title">Identifiador</p>
          <p className="sub-title">2c1b951f356c4680b13ba1c9fc889c47</p>
        </div>

        <Footer />

        <ButtonContainer onClick={handleButtonClick}>
          <ArrowRight size={25} />
        </ButtonContainer>
      </Container>
    </PaymentContainer>
  );
};

export default Payment;
