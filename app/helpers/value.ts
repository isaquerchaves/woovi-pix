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
  const monthlyRate = interestRate / 100;
  const installmentValue =
    (value * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -installmentCount));
  return installmentValue;
};
