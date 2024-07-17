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
import Loading from "../components/loading/Loading";

const Payment = () => {
  const router = useRouter();
  const { value, installmentCount, interestRate, updateRemainingValue } =
    useContext(ValuePixContext);
  const [formattedDate, setFormattedDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  const valueCalculated = calculateInstallmentWithInterest(
    value,
    interestRate,
    installmentCount
  );

  const valueTotalCalculated =
    calculateInstallmentWithInterest(value, interestRate, installmentCount) *
    installmentCount;

  const remainingValue = valueTotalCalculated - valueCalculated;
  const firstInstallmentValue = value / installmentCount;

  useEffect(() => {
    updateRemainingValue(remainingValue);
    setTimeout(() => setLoading(false), 1500);
  }, [remainingValue, updateRemainingValue]);

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
    if (installmentCount === 1) {
      router.push(`/payment-successful`);
    } else {
      router.push(`/payment-card`);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <PaymentContainer>
      <Container>
        <Header
          title={
            installmentCount === 1
              ? `Pague o valor de ${formatCurrency(
                  Number(firstInstallmentValue.toFixed(2))
                )} no Pix`
              : `Pague a entrada de ${formatCurrency(
                  Number(firstInstallmentValue.toFixed(2))
                )} pelo Pix`
          }
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
            style={{
              height: "auto",
              maxWidth: "100%",
              width: "100%",
              borderRadius: "10px",
              border: "2px solid #03D69D",
              padding: "10px",
            }}
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
              <div className={installmentCount === 1 ? "" : "circle-connector"}>
                <Circle size={16} color="#03D69D" />
              </div>
              <p>
                {installmentCount === 1 ? "Valor do Pix" : "1ª entrada no Pix"}
              </p>
            </div>
            <span>{formatCurrency(valueCalculated)}</span>
          </div>
          {installmentCount > 1 && (
            <div className="installments-itens">
              <div className="pix">
                <Circle size={16} color="#E5E5E5" />
                <p>2ª no cartão</p>
              </div>
              <span>{formatCurrency(remainingValue)}</span>
            </div>
          )}
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
