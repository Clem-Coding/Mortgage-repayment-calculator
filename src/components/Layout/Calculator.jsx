import "./Form.scss";

export default function Form({ onSubmit, handleChange, formData }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="mortgageAmount">Mortgage Amount </label>
          <input
            type="number"
            id="mortgageAmount"
            name="mortgageAmount"
            value={formData.mortgageAmount}
            onChange={handleChange}
            required
          />

          <label htmlFor="mortgageTerm">Mortgage Term </label>
          <input
            type="number"
            id="mortgageTerm"
            name="mortgageTerm"
            value={formData.mortgageTerm}
            onChange={handleChange}
            required
          />

          <label htmlFor="interestRate">
            Interest Rate:
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="repayment">Repayment</label>
          <input
            type="radio"
            id="repayment"
            name="repaymentType"
            value="repayment"
            checked={formData.repaymentType === "repayment"}
            onChange={handleChange}
          />

          <label htmlFor="interestOnly">Interest Only</label>
          <input
            type="radio"
            id="interestOnly"
            name="repaymentType"
            value="interest-only"
            checked={formData.repaymentType === "interest-only"}
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit">Calculate Repayments</button>
      </form>
    </>
  );
}
