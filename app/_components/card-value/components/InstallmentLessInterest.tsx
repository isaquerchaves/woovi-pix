import { useContext } from "react";
import {
  calculateInstallmentWithInterest,
  formatCurrency,
} from "@/app/_helpers/value";
import { ValuePixContext } from "@/app/_context/value";

interface FullProps {
  index: any;
  installment: any;
  installmentValue: any;
}

const InstallmentLessInterest = ({
  index,
  installment,
  installmentValue,
}: FullProps) => {
  const totalWithInterest = installmentValue * installment;

  return (
    <div className="card-full">
      <div key={index}>
        <div>
          <p className="title">
            <span>{installment}x</span> {formatCurrency(installmentValue)}
          </p>
          <p>Total: {formatCurrency(totalWithInterest)}</p>
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
