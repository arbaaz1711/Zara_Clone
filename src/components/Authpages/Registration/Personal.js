import React, { Fragment, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Personal.module.css";

const Personal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const history = useHistory();
  const emailRef = useRef();
  const passRef = useRef();

  const signupHandler = (event) => {
    event.preventDefault();
    console.log(email, "email1", password, "pass1", data, "data1");
    console.log(emailRef.current.value, "emailRef11");
    console.log(passRef.current.value, "passRef11");

    const myDataObj = [
      ...data,
      { email: emailRef.current.value, password: passRef.current.value },
    ];
    console.log(data, "data");
    console.log(myDataObj, "mydataobj");
    setData(myDataObj);
    localStorage.setItem("data", JSON.stringify(myDataObj));
  };

  return (
    <Fragment>
      <form onSubmit={signupHandler} className={styles.form}>
        <div className={styles.inputs}>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            required
            autoComplete="none"
          />
          <label htmlFor="email">E-MAIL</label>
        </div>
        <div className={styles.inputs}>
          <input type="password" name="password" ref={passRef} required />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="repeat" required />
          <label htmlFor="repeat">REPEAT PASSWORD</label>
        </div>
        <div className={styles.inputs}>
          <input type="text" name="name" required />
          <label htmlFor="name">NAME</label>
          <input type="number" name="pincode" required />
          <label htmlFor="pincode">PINCODE</label>
        </div>
        <div className={styles.inputs}>
          <input type="text" name="address" required />
          <label htmlFor="address">ADDRESS</label>
          <input type="text" name="info" placeholder="Optional" />
          <label htmlFor="info">MORE INFO</label>
        </div>
        <div className={styles.inputs}>
          <input type="text" name="locality" required />
          <label htmlFor="locality">LOCALITY</label>
          <input type="text" name="city" required />
          <label htmlFor="city">CITY</label>
        </div>
        <div className={styles.inputs}>
          <input type="text" name="state" required />
          <label htmlFor="state">STATE</label>
          <span>India</span>
          <label htmlFor="region">REGION</label>
        </div>
        <div className={styles.inputs}>
          <input type="number" name="mobile" required />
          <label htmlFor="mobile">TELEPHONE</label>
        </div>
        <div className={styles.checkbox}>
          <div>
            <input type="checkbox" name="news" id="news" />
            <span>I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL</span>
          </div>
          <div>
            <input type="checkbox" name="privacy" id="privacy" />
            <span>
              I ACCEPT THE <u> PRIVACY STATEMENT </u>{" "}
            </span>
          </div>
        </div>
        <button>CREATE ACCOUNT</button>
      </form>
    </Fragment>
  );
};

export default Personal;
