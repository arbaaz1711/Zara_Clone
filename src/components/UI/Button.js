import React from "react";
import styles from './Button.module.css'

const Button = (props) => {
return(
<button onClick={props.clickHandler} className={styles.btn}>{props.children}</button>
)
}

export default Button;