export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`
}

export const calculateCashback = (value: number) => {
    return value*0.03
}