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
      photo: props.photo,
      price: props.price,
    });
  };

  return (
    <li className={classes.food}>
      <div className={classes.foodInt}>
        <p className={classes.imgContainer}>
          <img src={props.photo} className={classes.img} alt={props.name} />
        </p>
        <div className={classes.foodBottom}>
          <div>
            <h3 className={classes.title}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
          </div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <FoodCardForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodCard;
