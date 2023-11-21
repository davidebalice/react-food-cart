import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { AuthContext } from "../../context/authContext";
import CartContext from "../../context/CartContext";
import SummaryItem from "./SummaryItem";
import SummaryTotal from "./SummaryTotal";
import classes from "./Checkout.module.css";

const Summary = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            <section className={`${classes.cartContainer} section-center`}>
              <h2 className={classes.titleSection}>Order summary</h2>
              <div className={classes.dataContainer}>
                <section>
                  {cartCtx.items.map((el) => {
                    return <SummaryItem key={el._id} {...el} />;
                  })}
                </section>
                {cartCtx.items.length >= 1 && <SummaryTotal />}
              </div>
            </section>
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Summary;
