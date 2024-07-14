import { calculateCashback, formatCurrency } from "@/app/helpers/value";
import { Card } from "./CardValue.style";
import Full from "./components/Full";
import Installment from "./components/Installment";

interface ValueProps {
  value: number;
  installments: number[];
}

const CardValue = ({ value, installments }: ValueProps) => {
  return (
    <>
      {installments.map((installment, index) => {
        const installmentValue = value / installment;
        const cashbackValue = calculateCashback(value);
        return (
          <Card>
            {installment === 1 ? (
              <Full
                index={index}
                installment={installment}
                installmentValue={installmentValue}
                cashbackValue={cashbackValue}
              />
            ) : (
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
    </>
  );
};

export default CardValue;
