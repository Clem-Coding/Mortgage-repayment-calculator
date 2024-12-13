import Calculator from "../components/Layout/Calculator";
import Results from "../components/Layout/Results";
import { useState, useEffect } from "react";
import {
  calculateMortgagePayment,
  calculateInterestOnlyPayment,
} from "../mortgageUtils";

export default function Home() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mortgageAmount: 130000,
    mortgageTerm: 25,
    interestRate: 4.3,
    repaymentType: "repayment",
  });

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const [errors, setErrors] = useState({
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
  });

  console.log(errors, "les erreurs");

  useEffect(() => {
    console.log("Monthly Repayment: ", monthlyRepayment);
    console.log("Total Repayment: ", totalRepayment);
    console.log("Les erreurs: ", totalRepayment);
  }, [monthlyRepayment, totalRepayment]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const newErrors = {
      mortgageAmount:
        !formData.mortgageAmount || formData.mortgageAmount === "0",
      mortgageTerm: !formData.mortgageTerm || formData.mortgageTerm === "0",
      interestRate: !formData.interestRate || formData.interestRate === "0",
    };

    setErrors(newErrors);

    const { mortgageAmount, mortgageTerm, interestRate, repaymentType } =
      formData;

    let calculatedMonthlyRepayment = 0;
    let calculatedTotalRepayment = 0;

    if (repaymentType === "repayment") {
      const result = calculateMortgagePayment(
        mortgageAmount,
        interestRate,
        mortgageTerm
      );

      calculatedMonthlyRepayment = result.monthlyRepayment;
      calculatedTotalRepayment = result.totalRepayment;
    } else if (repaymentType === "interest-only") {
      const result = calculateInterestOnlyPayment(
        mortgageAmount,
        interestRate,
        mortgageTerm
      );
      calculatedMonthlyRepayment = result.monthlyRepayment;
      calculatedTotalRepayment = result.totalRepayment;
    }

    setMonthlyRepayment(calculatedMonthlyRepayment);
    setTotalRepayment(calculatedTotalRepayment);
  };

  return (
    <div className="container">
      <Calculator
        onSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        isSubmitted={isSubmitted}
        errors={errors}
      />
      <Results
        isSubmitted={isSubmitted}
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
        errors={errors}
      />
    </div>
  );
}
