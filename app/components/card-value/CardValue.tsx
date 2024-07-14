import { useContext, useState } from "react";
import {
  calculateCashback,
  calculateInstallmentWithInterest,
} from "@/app/helpers/value";
import {
  SingleInstallmentContainer,
  CardsContainer,
  Card,
} from "./CardValue.style";
import Full from "./components/Full";
import Installment from "./components/Installment";
import InstallmentLessInterest from "./components/InstallmentLessInterest";
import { ValuePixContext } from "@/app/context/value";

interface ValueProps {
  value: number;
  installments: number[];
}

const CardValue = ({ value, installments }: ValueProps) => {
  const [selectedInstallment, setSelectedInstallment] = useState<number | null>(
    null
  );
  const { updateInstallmentCount, interestRate } = useContext(ValuePixContext);

  // Função para lidar com a seleção de uma parcela
  const handleSelect = (installment: number) => {
    setSelectedInstallment(installment);
    updateInstallmentCount(installment);
  };

  return (
    <>
      {/* Container para parcela única */}
      <SingleInstallmentContainer>
        {installments
          .filter((installment) => installment === 1)
          .map((installment, index) => {
            const installmentValue = value / installment;
            const cashbackValue = calculateCashback(value);
            return (
              <Card
                key={index}
                className="single-installment"
                onClick={() => handleSelect(installment)}
              >
                <input
                  type="radio"
                  name="installment"
                  value={installment}
                  checked={selectedInstallment === installment}
                  onChange={() => handleSelect(installment)}
                />
                <Full
                  index={index}
                  installment={installment}
                  installmentValue={installmentValue}
                  cashbackValue={cashbackValue}
                />
              </Card>
            );
          })}
      </SingleInstallmentContainer>

      {/* Container para múltiplas parcelas */}
      <CardsContainer>
        {installments
          .filter((installment) => installment > 1)
          .map((installment, index) => {
            // Calcula o valor da parcela com juros
            const installmentValue = calculateInstallmentWithInterest(
              value,
              interestRate,
              installment
            );
            return (
              <Card key={index} onClick={() => handleSelect(installment)}>
                <input
                  type="radio"
                  name="installment"
                  value={installment}
                  checked={selectedInstallment === installment}
                  onChange={() => handleSelect(installment)}
                />
                {/* Renderiza o componente de parcela ou parcela com menos juros */}
                {installment === 4 ? (
                  <InstallmentLessInterest
                    index={index}
                    installment={installment}
                    installmentValue={installmentValue}
                  />
                ) : (
                  // Renderiza as demais parcelas
                  <Installment
                    index={index}
                    installment={installment}
                    installmentValue={installmentValue}
                    value={value}
                  />
                )}
              </Card>
            );
          })}
      </CardsContainer>
    </>
  );
};

export default CardValue;
