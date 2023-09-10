import React, { Fragment } from "react";
import Personal from "./Personal";

import styles from './RegisterOption.module.css';

const RegisterOption = () => {
return(
    <Fragment>
        <div className={styles.container}>
            <h2>PERSONAL DETAILS</h2>
            <form>
                <input type="radio" value='PERSONAL' name="type"/>
                <label htmlFor="personal">PERSONAL</label>
                <input type="radio" value='COMPANY'  name='type' />
                <label htmlFor="company">COMPANY</label>
            </form>
           
        </div>
         <Personal/>
    </Fragment>
)
}

export default RegisterOption;