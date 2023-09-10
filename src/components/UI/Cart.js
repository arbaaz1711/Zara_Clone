import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

import styles from './Cart.module.css';
import Counter from "./Counter";

const Cart = () => {
    const location = useLocation();
    console.log(location.state)
  return(
  <Fragment>
    <div className={styles.container}>
    {location.state === undefined ? <div>
        <h2>Your Cart is Empty!</h2>
    </div> : <div>
        {/* <h3>You have <u> {location.state.name}</u> in your cart</h3> */}
        <h3>Item Name</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>

        <Counter></Counter>
        <Button>Place Order</Button>
    </div> }
    </div>
  </Fragment>
  )};

export default Cart;
