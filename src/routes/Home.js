import React, { useState } from "react";
import "./share.css";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Home = ({ product }) => {
  return (
    <div>
      <div className={styles.mainBg}></div>
      <div className="container">
        <h1 className={styles.productTitle}>BEST</h1>
        <div className={styles.productList}>
          <Product product={product} />
        </div>
      </div>
    </div>
  );
};

export default Home;
