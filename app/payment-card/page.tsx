"use client";
import { useContext, useEffect, useState } from "react";
import { ButtonContainer, Container } from "../(home)/home.style";
import Header from "../components/header/header";
import { ValuePixContext } from "../context/value";
import {
  calculateInstallmentWithInterest,
  formatCurrency,
} from "../helpers/value";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, ChevronUp, Circle } from "lucide-react";
import Footer from "../components/footer/Footer";
import { PaymentCardContainer } from "./payment-card.style";
import { PaymentContainer } from "../payment/payment.style";
import Loading from "../components/loading/Loading";

const PaymentCard = () => {
  const router = useRouter();
  const { value, installmentCount, interestRate, remainingValue } =
    useContext(ValuePixContext);
  const [formattedDate, setFormattedDate] = useState("");
  const [installmentsInfo, setInstallmentsInfo] = useState<
    { installment: number; value: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Verificar se tem um valor
  useEffect(() => {
    if (!value) {
      router.push(`/`);
    }
  }, [value, router]);

  const [cpf, setCpf] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const remainingInstallments = installmentCount - 1;

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

  // Função para calcular o valor das parcelas do remainingValue
  const calculateRemainingInstallments = () => {
    const options = [];
    for (let i = 1; i <= remainingInstallments; i++) {
      const installmentValue = remainingValue / i;
      options.push({ installment: i, value: installmentValue });
    }
    return options;
  };

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
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    // Gerar informações das parcelas restantes
    const info = calculateRemainingInstallments();
    setInstallmentsInfo(info);
  }, [remainingValue]);

  // Formatações dos inputs
  const handleCardNumberChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedCardNumber = value
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1 $2")
      .substring(0, 19);
    setCardNumber(formattedCardNumber);
  };

  const handleCpfChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedCpf = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .substring(0, 14);
    setCpf(formattedCpf);
  };

  const handleExpiryDateChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedDate = value.replace(/(\d{2})(\d)/, "$1/$2").substring(0, 7);
    setExpiryDate(formattedDate);
  };

  const handleCvvChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 3);
    setCvv(value);
  };

  const handlePaymentButtonClick = () => {
    if (cpf && cardNumber && expiryDate && cvv) {
      router.push(`/payment-successful`);
    } else {
      alert(
        "Por favor, preencha todos os campos para prosseguir com o pagamento."
      );
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header
        title={`Pague o restante em até ${remainingInstallments}x no cartão`}
      />
      <PaymentCardContainer>
        <div className="form-field">
          <input type="text" placeholder=" " />
          <label>Nome Completo</label>
        </div>
        <div className="form-field">
          <input
            type="text"
            placeholder=" "
            value={cpf}
            onChange={handleCpfChange}
          />
          <label>CPF</label>
        </div>
        <div className="form-field">
          <input
            type="text"
            placeholder=" "
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          <label>Número do cartão</label>
        </div>
        <div className="vencimento-cvv">
          <div className="form-field">
            <input
              type="text"
              placeholder=" "
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
            <label>Vencimento</label>
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder=" "
              value={cvv}
              onChange={handleCvvChange}
            />
            <label>CVV</label>
          </div>
        </div>
        <div className="form-field">
          <select>
            {installmentsInfo.map((info) => (
              <option key={info.installment} value={info.installment}>
                {info.installment}x de{" "}
                {formatCurrency(Number(info.value.toFixed(2)))}
              </option>
            ))}
          </select>
          <label>Parcelas</label>
        </div>
      </PaymentCardContainer>

      <PaymentContainer>
        <button className="copy-code" onClick={handlePaymentButtonClick}>
          <div>Pagar</div>
        </button>

        <div className="identifier">
          <p className="title">Prazo de pagamento:</p>
          <p className="sub-title">{formattedDate}</p>
        </div>

        <div className="installments-section">
          <div className="installments-itens">
            <div className="pix">
              <div className="circle-connector">
                <Check
                  size={16}
                  color="white"
                  style={{
                    backgroundColor: "#03d69d",
                    padding: "2px",
                    borderRadius: "50%",
                    border: "none",
                  }}
                />
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
      </PaymentContainer>
    </Container>
  );
};

export default PaymentCard;
