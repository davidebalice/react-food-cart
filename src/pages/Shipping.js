import Header from "../components/Layout/Header";
import Step from "../components/Checkout/Step";
import Shipping from "../components/Checkout/Shipping";
import Footer from "../components/Layout/Footer";

const ShippingPage = () => {
  return (
    <>
      <div>
        <Header />
        <Step step={3} />
        <Shipping />
      </div>
      <Footer />
    </>
  );
};

export default ShippingPage;
