import classes from "../Cart/CartItem.module.css";

const SummaryItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.cartItem}>
      <div className={classes.imgWrapper}>
        <p className={classes.imgContainer}>
          <img src={props.photo} className={classes.img} alt={props.name} />
        </p>
        <div className={classes.nameContainer}>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}></div>
    </li>
  );
};

export default SummaryItem;
