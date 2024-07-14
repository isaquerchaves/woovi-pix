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
import { ArrowRight, ChevronUp, Files } from "lucide-react";
import { PaymentContainer } from "./payment.style";
import Footer from "../components/footer/Footer";

const Payment = () => {
  const router = useRouter();
  const { value, installmentCount, interestRate } = useContext(ValuePixContext);
  const [formattedDate, setFormattedDate] = useState("");
  const [installmentsInfo, setInstallmentsInfo] = useState<
    { installment: number; value: number }[]
  >([]);

  // Calculo com o valor das parcelas
  const valueCalculated = formatCurrency(
    calculateInstallmentWithInterest(value, interestRate, installmentCount)
  );

  // Calculo com valor total
  const valueTotalCalculated = formatCurrency(
    calculateInstallmentWithInterest(value, interestRate, installmentCount) *
      installmentCount
  );

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

  useEffect(() => {
    // Gerar informações das parcelas
    const info = Array.from({ length: installmentCount }, (_, index) => ({
      installment: index + 1,
      value: calculateInstallmentWithInterest(value, interestRate, index + 1),
    }));
    setInstallmentsInfo(info);
  }, [value, installmentCount, interestRate]);

  const handleButtonClick = () => {
    router.push(`/payment-card`);
  };

  return (
    <PaymentContainer>
      <Container>
        <Header title={`Pague a entrada de ${valueCalculated} pelo Pix`} />
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
          <div className="identifier">
            <p className="title">Prazo de pagamento:</p>
            <p className="sub-title">{formattedDate}</p>
          </div>
        </div>

        <div className="installments-section">
          {installmentsInfo.map((info) => (
            <div key={info.installment} className="installments-itens">
              <p>
                {info.installment}ª parcela no{" "}
                {info.installment === 1 ? "Pix" : "cartão"}{" "}
              </p>
              <span>{valueCalculated}</span>
            </div>
          ))}
        </div>

        <div className="section-cet">
          <p>CET: 0,5%</p>
          <span>Total: {valueTotalCalculated}</span>
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
