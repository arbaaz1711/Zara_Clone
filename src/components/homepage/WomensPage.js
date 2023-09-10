import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WomensPage.module.css";

const WomensPage = (props) => {
  const [pageName, setPageName] = useState("womensPage");
  const mensPageOpener = () => {
    setPageName("mensPage");
  };
  
  props.nextPageOpener(pageName);
  return (
    <Fragment>
      <Link to='/womenProduct'>
      <div className={styles.container} >
        <div className={styles.bg_img1}>
          <img
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-35//w/1367/IMAGE-landscape-fill-b9990393-6bee-455e-87ec-86869c68a416-default_0.jpg?ts=1661794819791"
            alt="img1"
          />
        </div>
        <div className={styles.bg_img2}>
          <img
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-35-2//w/1368/IMAGE-landscape-fill-897c04ba-5dd6-4e34-9c8b-b85b4d361dde-default_0.jpg?ts=1661848392555"
            alt="img2"
          />
        </div>
        <div className={styles.bg_img3}>
          <img
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-34//w/1368/IMAGE-landscape-fill-04012559-b425-4b97-abeb-09aec1f59345-default_0.jpg?ts=1661419895724"
            alt=""
          />
        </div>
      </div>
      </Link>
      <div onClick={mensPageOpener} className={styles.forward}>
        <span>MAN </span>
        <span>{">"}</span>
      </div>
    </Fragment>
  );
};

export default WomensPage;
