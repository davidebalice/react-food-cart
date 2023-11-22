import React, { useContext, useState } from "react";
import NotLogged from "./NotLogged";
import { AuthContext } from "../../context/authContext";
import CartContext from "../../context/CartContext";
import classes from "./Checkout.module.css";
import classes2 from "../Cart/Cart.module.css";
import SummaryItem from "./SummaryItem";
import Button from "react-bootstrap/Button";

const Confirm = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;

  const { shippingData } = useContext(AuthContext);
  const { name, surname, city, address, tel, email } = shippingData;

  const [order, setOrder] = useState({
    userData: {
      name: "",
      surname: "",
      address: "",
      city: "",
      tel: "",
      email: "",
    },
    cartItems: [],
    total: 0,
    placed: false,
  });

  const createOrder = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      cartItems: cartCtx.items,
      userData: shippingData,
      total: totalAmount,
      placed: true,
    }));
    cartCtx.removeAllItem();
  };

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            {order.placed ? (
              <p style={{ textAlign: "center" }}>
                <br />
                <h4>Order placed</h4>
              </p>
            ) : (
              <>
                {" "}
                <h2 className={classes.titleSection}>Confirm order</h2>
                <p>
                  <b>Shipping data:</b>
                </p>
                <br />
                <div className={classes.dataContainer}>
                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>Name</p>
                    <p className={classes.shippingdataCol2}>{name}</p>
                  </div>

                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>Surname</p>
                    <p className={classes.shippingdataCol2}>{surname}</p>
                  </div>

                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>City</p>
                    <p className={classes.shippingdataCol2}>{city}</p>
                  </div>

                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>Address</p>
                    <p className={classes.shippingdataCol2}>{address}</p>
                  </div>

                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>Tel</p>
                    <p className={classes.shippingdataCol2}>{tel}</p>
                  </div>

                  <div className={classes.shippingdataRow}>
                    <p className={classes.shippingdataCol1}>Email</p>
                    <p className={classes.shippingdataCol2}>{email}</p>
                  </div>
                </div>
                <br />
                <br />
                <p>
                  <b>Products:</b>
                </p>
                <br />
                <div className={classes.dataContainer}>
                  <section className="cart-section">
                    {cartCtx.items.map((el) => {
                      return <SummaryItem key={el._id} {...el} />;
                    })}
                  </section>
                  {cartCtx.items.length > 0 && (
                    <section
                      className={`${classes2.cartContainer} total-section section-center`}
                    >
                      <div className={`${classes2.totalContainer}  w-100`}>
                        <div className={classes2.total}>
                          <div className="card-content">
                            <h4> Total </h4>
                          </div>
                          <div className="card-content">
                            <h4>{totalAmount}</h4>
                          </div>
                        </div>

                        <div className={classes2.actions}>
                          <Button
                            variant="primary"
                            className={classes2.checkoutButton}
                            onClick={createOrder}
                          >
                            Confirm order
                          </Button>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
                <br />
                <br />
              </>
            )}
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Confirm;
