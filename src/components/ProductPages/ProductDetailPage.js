import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../UI/Button";

import styles from './ProductDetailPage.module.css';

const ProductDetailPage = (props) => {
    const history = useHistory()
    const location = useLocation()

    const productDetails = location.state;

    const addToBag = () => {
      if (localStorage.getItem('isLoggedIn') === 'login'){
        history.push('/cart',productDetails)
      }
      else{
        alert("Please Login to Continue")
        history.push('/logon')
      }
}
return(
    <Fragment>
        <div className={styles.container}>
            <div>
            <img src={location.state.img} alt="" />
            </div>
            <div>
                <h2>{location.state.name}</h2>
                {/* <span>Quantity</span> */}
                <span>{location.state.price}</span>
                <Button clickHandler={addToBag}>Add To Bag</Button>
            </div>
        </div>
    </Fragment>
)
}

export default ProductDetailPage;