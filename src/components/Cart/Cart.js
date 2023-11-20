import React, { useContext } from "react";
import classes from "./Cart.module.css";
import classes2 from "../Food/Food.module.css";
import CartItem from "./CartItem";
import CartContext from "../../context/CartContext";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const items = (
    <ul className={classes["cartItems"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <section className={classes2.food}>
        <Card>
          <ul>{items}</ul>
          <br />
          <br />
          <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </Card>
      </section>
    </>
  );
};

export default Cart;
