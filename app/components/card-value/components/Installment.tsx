import { formatCurrency } from "@/app/helpers/value";

interface InstallmentProps {
  index: any;
  installment: any;
  installmentValue: any;
  value: number;
}

const Installment = ({
  index,
  installment,
  installmentValue,
  value,
}: InstallmentProps) => {
  const totalWithInterest = installmentValue * installment;

  return (
    <>
      <div key={index}>
        <div>
          <p className="title">
            <span>{installment}x</span>{" "}
            {formatCurrency(installmentValue.toFixed(2))}
          </p>
          <p>Total: {formatCurrency(totalWithInterest)}</p>
        </div>
      </div>
    </>
  );
};

export default Installment;
