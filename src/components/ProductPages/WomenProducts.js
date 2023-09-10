import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { images } from "./productImages";

import styles from "./WomenProducts.module.css";

const WomenProducts = () => {
  const history = useHistory();


const goToReceiver = (item) => {
    history.push("/womenProduct/product-detail",item)
}
  return (
    <Fragment>
      <div className={styles.container}>
        {images.map((item, index) => {
          return (
            <Fragment>
              <div key={index} onClick={()=>goToReceiver(item)}>
                
                  <img src={item.img} />
                  <div>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WomenProducts;
