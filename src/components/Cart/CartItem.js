import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `€ ${props.price.toFixed(2)}`;

  return (
    <li className={classes.cartItem}>
      <div className={classes.imgWrapper}>
        <p className={classes.imgContainer}>
          <img src={props.photo} className={classes.img} alt={props.name} />
        </p>
        <div className={classes.nameContainer}>
          <h2 className={classes.title}>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd} className={classes.qtyButton}>
          +
        </button>
        <button onClick={props.onRemove} className={classes.qtyButton}>
          −
        </button>
      </div>
    </li>
  );
};

export default CartItem;
