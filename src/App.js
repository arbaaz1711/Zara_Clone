import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/homepage/Header";
import LoginPage from "./components/Authpages/LoginPage";
import RegisterOption from "./components/Authpages/Registration/RegisterOption";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import WomensPage from "./components/homepage/WomensPage";
import MensPage from "./components/homepage/MensPage";
import WomenProducts from "./components/ProductPages/WomenProducts";
import ProductDetailPage from "./components/ProductPages/ProductDetailPage";
import Cart from "./components/UI/Cart";

function App() {
  const [pageCount, setPageCount] = useState("womensPage");
   const [isAuthPerson,setIsAuthPerson] = useState('false');

  const nextPageOpenerHandler = (count) => {
    setPageCount(count);
    console.log(count);
  };

   const authHandler = (validation) => {
    setIsAuthPerson(validation)
  }
   console.log(isAuthPerson)
  
  return (
    <Fragment>
      <Route path="/">
        <Header />
      </Route>
      <Switch>
        {pageCount === "womensPage" ? (
          <Route path="/" exact>
            <WomensPage nextPageOpener={nextPageOpenerHandler} />
          </Route>
        ) : (
          <Route path="/" exact>
            <MensPage prevPageOpener={nextPageOpenerHandler} />
          </Route>
        )}

        <Route path="/logon" exact>
          <LoginPage auth={authHandler}/>
        </Route>
        <Route path="/signup" exact>
          <RegisterOption />
        </Route>
        <Route path="/womenProduct" exact>
          <WomenProducts />
        </Route>
        <Route path="/womenProduct/product-detail">
          <ProductDetailPage auth={isAuthPerson}/>
        </Route>
        <Route path='/cart' exact>
          <Cart/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
