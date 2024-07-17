export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};

export const calculateCashback = (value: number) => {
  return value * 0.03;
};

export const calculateInstallmentWithInterest = (
  value: number,
  interestRate: number,
  installmentCount: number
) => {
  const installmentValue = value / installmentCount + value * interestRate;
  const installmentValueDiscount3 =
    value / installmentCount + value * (interestRate - interestRate * 0.03);
  if (installmentCount === 4) {
    return Number(installmentValueDiscount3.toFixed(2));
  } else {
    return Number(installmentValue.toFixed(2));
  }
};
