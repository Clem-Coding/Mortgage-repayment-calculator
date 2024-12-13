export default function Results({
  isSubmitted,
  monthlyRepayment,
  totalRepayment,
  errors,
}) {
  return (
    <section className="results-section">
      {(!isSubmitted ||
        (isSubmitted && Object.values(errors).includes(true))) && (
        <img src="./images/illustration-empty.svg" alt="Illustration" />
      )}

      <h1 className="results-section_title">
        {isSubmitted && !Object.values(errors).includes(true)
          ? "Your Results"
          : "Results shown here"}
      </h1>

      <p className="results-section_text">
        {isSubmitted
          ? 'Your results are shown below based on the informations you provided. To adjust the results, edit the form and click"calculate repayments" again.'
          : 'Complete the form and click "calculate repayments" to see what your monthly repayments would be'}
      </p>

      {isSubmitted && !Object.values(errors).includes(true) && (
        <div className="results-wrapper">
          <p> Your monthly repayments </p>
          <p className="highlight-yellow"> £{monthlyRepayment}</p>
          <p>Total you'll repay over the term</p>
          <p className="highlight-white"> £{totalRepayment}</p>
        </div>
      )}
    </section>
  );
}
