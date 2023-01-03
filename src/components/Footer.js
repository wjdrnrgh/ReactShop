import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        <br />
        &copy;2022. JUNG GUKHO All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
