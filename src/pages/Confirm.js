import Header from "../components/Layout/Header";
import Step from "../components/Checkout/Step";
import Confirm from "../components/Checkout/Confirm";
import Footer from "../components/Layout/Footer";

const ConfirmPage = () => {
  return (
    <>
      <div>
        <Header />
        <Step step={4} />
        <Confirm />
      </div>
      <Footer />
    </>
  );
};

export default ConfirmPage;
