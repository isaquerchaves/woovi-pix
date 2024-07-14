import { useContext } from "react";
import { formatCurrency } from "@/app/helpers/value";
import { ValuePixContext } from "@/app/context/value";

interface FullProps {
  index: any;
  installment: any;
  installmentValue: any;
  value: any;
}

const InstallmentLessInterest = ({
  index,
  installment,
  installmentValue,
  value,
}: FullProps) => {
  const discountRate = 1.9283; // Taxa de juros com desconto de 3%

  // Calcula o total com a taxa de juros com desconto de -3%
  const totalValue = value * (1 + discountRate / 100);

  return (
    <div className="card-full">
      <div key={index}>
        <div>
          <p className="title">
            <span>{installment}x</span> {formatCurrency(installmentValue)}
          </p>
          <p>Total: {formatCurrency(totalValue)}</p>
        </div>

        <p className="cashback-value">
          <span>-3% de juros:&nbsp;</span>
          Melhor opção de parcelamento
        </p>
      </div>
    </div>
  );
};

export default InstallmentLessInterest;
