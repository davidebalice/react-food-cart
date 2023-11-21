import Header from "../components/Layout/Header";
import Step from "../components/Checkout/Step";
import Login from "../components/Checkout/Login";
import Footer from "../components/Layout/Footer";

const LoginPage = () => {
  return (
    <>
      <div>
        <Header />
        <Step step={1} />
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
