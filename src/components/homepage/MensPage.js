import React, { Fragment, useState } from "react";
import styles from './MensPage.module.css';

const MensPage = (props) => {
    const [pageName,setPageName] = useState('mensPage')
    const womensPageOpener = () => {
        setPageName('womensPage')
    }
    props.prevPageOpener(pageName)
  return (
    <Fragment>
      <div>
        <video width="100%" autoPlay muted>
          <source
            src="https://static.zara.net/video///mkt/2022/8/aw22-north-man-new/subhome-xmedia-35/w/1368//landscape-default/subhome-xmedia-35_0.mp4?ts=1661785285729"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <img
          src="https://static.zara.net/photos///mkt/2022/8/aw22-north-man-jeans/subhome-xmedia-34/w/1368//landscape-default/subhome-xmedia-34_0.jpg?ts=1661357409776"
          alt="2nd img"
        />
      </div>
      <div>
        <img
          src="https://static.zara.net/photos///2022/I/M/1/p/0000/002/325/2/w/838/0000002325_13_12_1.jpg?ts=1660819337975"
          alt="3rd img"
        />
      </div>
      <div onClick={womensPageOpener} className={styles.forward}>
        <span>WOMEN</span>
        <span>{"<"}</span>
      </div>
    </Fragment>
  );
};

export default MensPage;
