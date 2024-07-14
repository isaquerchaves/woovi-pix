import { formatCurrency } from "@/app/helpers/value";

interface FullProps {
  index: any;
  installment: any;
  installmentValue: any;
  cashbackValue: any;
}

const Full = ({
  index,
  installment,
  installmentValue,
  cashbackValue,
}: FullProps) => {
  return (
    <div className="card-full">
      <div key={index}>
        <div>
          <p className="title">
            <span>{installment}x</span> {formatCurrency(installmentValue)}
          </p>
          <p className="sub-title">
            Ganhe <span>3%</span> de Cashback
          </p>
        </div>

        <p className="cashback-value">
          🤑
          <span>&nbsp;{formatCurrency(cashbackValue)}&nbsp;</span>
          de volta no seu Pix na hora
        </p>
      </div>
    </div>
  );
};

export default Full;
