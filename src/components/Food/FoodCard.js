import React, { useContext } from "react";
import classes from "./FoodCard.module.css";
import FoodCardForm from "./FoodCardForm";
import CartContext from "../../context/CartContext";

const FoodCard = (props) => {
  const price = `€ ${props.price.toFixed(2)}`;
  const CartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodCardForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodCard;
