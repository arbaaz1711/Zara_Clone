import React, { Fragment, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const location = useLocation();
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn",'logout');
    alert("Successfully Log Out!!!")
    history.replace('/')
  }
  
  const myStyles = {
    bg: {
      backgroundColor: location.pathname !== "/" ? "white" : "",
      position: location.pathname !== "/" ? "sticky" : "fixed",
    },
  };
  return (
    <Fragment>
      <header className={styles.header} style={myStyles.bg}>
        <div >
          <Link  style={{ textDecoration: "none", color: "black" }} to="/">
            <h2 >ZARA</h2>
          </Link>
        </div>
        <span>SEARCH</span>
        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to="/logon">
            {location.pathname !== "/logon" && localStorage.getItem('isLoggedIn') !== 'login' &&<span>LOG IN </span>}
          </Link>
           {localStorage.getItem('isLoggedIn') === 'login' && <span onClick={logoutHandler}>LOG OUT</span> }
          <span>HELP</span>
          <Link  style={{ textDecoration: "none", color: "black" }} to='/cart'>
          <span>CART</span>
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
