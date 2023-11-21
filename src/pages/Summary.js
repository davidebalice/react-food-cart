import Header from "../components/Layout/Header";
import Step from "../components/Checkout/Step";
import Summary from "../components/Checkout/Summary";
import Footer from "../components/Layout/Footer";

const SummaryPage = () => {
  return (
    <>
      <div>
        <Header />
        <Step step={2} />
        <Summary />
      </div>
      <Footer />
    </>
  );
};

export default SummaryPage;
