import "./calculator.scss";

export default function Form({ onSubmit, handleChange, formData, errors }) {
  return (
    <>
      <section className="calculator-section">
        <h1 className="calculator-section_title">Mortgage Calculator</h1>
        <button>Clear all</button>

        <form className="form" onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="mortgageAmount">
              Mortgage Amount
              <div className="input-wrapper">
                <span className="input-suffix input-suffix_left">£</span>

                <input
                  className="form_input"
                  type="text"
                  id="mortgageAmount"
                  name="mortgageAmount"
                  value={formData.mortgageAmount}
                  onChange={handleChange}
                />
              </div>
              {errors.mortgageAmount && (
                <span className="error-message">This field is required</span>
              )}
            </label>

            <label htmlFor="mortgageTerm">
              Mortgage Term
              <div className="input-wrapper">
                <input
                  className="form_input"
                  type="text"
                  id="mortgageTerm"
                  name="mortgageTerm"
                  value={formData.mortgageTerm}
                  onChange={handleChange}
                />
                <span className="input-suffix input-suffix_right">years</span>
              </div>
              {errors.mortgageTerm && (
                <span className="error-message">This field is required</span>
              )}
            </label>

            <label htmlFor="interestRate">
              Interest Rate:
              <div className="input-wrapper">
                <input
                  className="form_input"
                  type="text"
                  id="interestRate"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={handleChange}
                />
                <span className="input-suffix input-suffix_right">%</span>
              </div>
              {errors.interestRate && (
                <span className="error-message">This field is required</span>
              )}
            </label>
          </fieldset>

          <fieldset>
            Mortgage Type
            <label className="form_radio-label" htmlFor="repayment">
              <input
                type="radio"
                id="repayment"
                name="repaymentType"
                value="repayment"
                checked={formData.repaymentType === "repayment"}
                onChange={handleChange}
              />
              Repayment
            </label>
            <label className="form_radio-label" htmlFor="interestOnly">
              <input
                type="radio"
                id="interestOnly"
                name="repaymentType"
                value="interest-only"
                checked={formData.repaymentType === "interest-only"}
                onChange={handleChange}
              />
              Interest Only
            </label>
          </fieldset>

          <button className="form_button" type="submit">
            <img
              src="./images/icon-calculator.svg"
              alt="Icone de calculatrice"
            />
            Calculate Repayments
          </button>
        </form>
      </section>
    </>
  );
}
