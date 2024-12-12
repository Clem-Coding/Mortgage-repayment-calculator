// Fonction pour calculer le paiement mensuel du prêt amortissable
export function calculateMortgagePayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfPayments = years * 12;

  const monthlyRepayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalRepayment = monthlyRepayment * numberOfPayments;

  return {
    monthlyRepayment: monthlyRepayment.toFixed(2),
    totalRepayment: totalRepayment.toFixed(2),
  };
}

// Fonction pour calculer le paiement mensuel du prêt à intérêts uniquement
export function calculateInterestOnlyPayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;

  const interestOnlyPayment = principal * monthlyRate;

  const totalRepayment = interestOnlyPayment * years * 12;

  return {
    monthlyRepayment: interestOnlyPayment.toFixed(2),
    totalRepayment: totalRepayment.toFixed(2),
  };
}
