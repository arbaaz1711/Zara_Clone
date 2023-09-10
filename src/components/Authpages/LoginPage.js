import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import { Link, useHistory } from "react-router-dom";

import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const [isEmailClicked, setisEmailClicked] = useState(false);
  const [isPassClicked, setIsPassClicked] = useState(false);
  const [isAuthPerson, setIsAuthPerson] = useState(false);
  const [getData, setGetData] = useState();


  const emailRef = useRef();
  const passRef = useRef();

  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    let count = 1;

    for(let x of getData)
    {
      if (
        x.email === emailRef.current.value &&
        x.password === passRef.current.value
      ) {
        alert("Login Successful!");
        emailRef.current.value = "";
        passRef.current.value = "";
        setIsAuthPerson(true);
        localStorage.setItem("isLoggedIn",'login')
        history.push('/');
        break;
      }
      count++;
    }
     if(getData.length === 0){
       alert("Please Create your Account first!")
       history.push('/signup');
      
     }
     if (count > getData.length && getData.length > 0)
       return alert("Your Email or password is wrong!");
  };
  props.auth(isAuthPerson);

  const mailBlurHandler = () => {
    emailRef.current.value.length < 5
      ? setisEmailClicked(true)
      : setisEmailClicked(false);
  };
  const passBlurHandler = () => {
    passRef.current.value.length === 0
      ? setIsPassClicked(true)
      : setIsPassClicked(false);
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("data"));
    if (storageData) {
      setGetData(storageData);
    } else {
      setGetData("");
    }
  }, []);

  return (
    <Fragment>
      <div className={styles.container}>
        <form onSubmit={loginHandler} className={styles.form}>
          <h2>LOG IN</h2>
          <div className={styles.inputs}>
            <input
              type="email"
              required
              onBlur={mailBlurHandler}
              ref={emailRef}
            />
            <label>E-MAIL</label>
            {isEmailClicked && <label htmlFor="error">required field</label>}
          </div>
          <div className={styles.inputs}>
            <input
              type="password"
              required
              onBlur={passBlurHandler}
              ref={passRef}
            />
            <label>Password</label>
            {isPassClicked && <label htmlFor="errorPass">required field</label>}
          </div>
          <span>HAVE YOU FORGOTTEN YOUR PASSWORD?</span>
          <Button>LOG IN</Button>
        </form>

        <div className={styles.register}>
          <h2>REGISTER</h2>
          <p>
            IF YOU STILL DON'T HAVE A{" "}
            <b style={{ color: "black" }}> ZARA.COM </b>ACCOUNT, USE THIS OPTION
            TO ACCESS THE REGISTRATION FORM.
          </p>
          <p>
            BY GIVING US YOUR DETAILS, PURCHASING IN{" "}
            <b style={{ color: "black" }}> ZARA.COM </b> WILL BE FASTER AND AN
            ENJOYABLE EXPERIENCE.
          </p>
          <Link to="/signup">
            <Button>CREATE ACCOUNT</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
