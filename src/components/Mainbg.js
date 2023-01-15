import React from "react";
import styles from "./Mainbg.module.css";

const Mainbg = ({ mainTxt, mainSubTxt, subTxt }) => {
  return (
    <div className={styles.textBox}>
      <div className={styles.textWrap}>
        <p className={styles.mainSubTxt}>{mainSubTxt}</p>
        <p className={styles.mainTxt}>{mainTxt}</p>
        <p className={styles.subTxt}>{subTxt}</p>
      </div>
    </div>
  );
};

export default Mainbg;
