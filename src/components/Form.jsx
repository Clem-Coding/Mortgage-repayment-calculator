import "./Form.scss";
import { useState } from "react";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  console.log(submitted);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="mortgageAmount">
            Mortgage Amount:
            <input
              type="text"
              id="mortgageAmount"
              name="mortgageAmount"
              placeholder="Enter mortgage amount"
            />
          </label>

          <label htmlFor="mortgageTerm">
            Mortgage Term:
            <input
              type="text"
              id="mortgageTerm"
              name="mortgageTerm"
              placeholder="Enter term in years"
            />
          </label>

          <label htmlFor="interestRate">
            Interest Rate:
            <input
              type="text"
              id="interestRate"
              name="interestRate"
              placeholder="Enter interest rate %"
            />
          </label>
        </fieldset>

        <fieldset>
          {/* <legend>Mortgage Type</legend> */}

          <label htmlFor="repayment">Repayment</label>
          <input type="radio" id="repayment" name="type" value="repayment" />

          <label htmlFor="interestOnly">Interest Only</label>
          <input
            type="radio"
            id="interestOnly"
            name="type"
            value="interest-only"
          />
        </fieldset>
        <button type="submit">Calculate Repayments</button>
      </form>
    </>
  );
}
