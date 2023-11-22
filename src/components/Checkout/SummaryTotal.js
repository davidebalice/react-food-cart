import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import classes from "../Cart/Cart.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SummaryTotal = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <section
      className={`${classes.cartContainer} total-section section-center`}
    >
      <div className={`${classes.totalContainer} w-100`}>
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
          <NavLink to="/shipping">
            <Button variant="primary" className={classes.checkoutButton}>
              Continue
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SummaryTotal;
