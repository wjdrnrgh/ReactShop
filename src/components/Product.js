import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <>
      {product.map((item) => {
        return (
          <div key={item.id} className={styles.productItem}>
            <Link to={`/detail/${item.id}`} className={styles.productLink}>
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.cover}${
                    item.id + 1
                  }.jpg`}
                  className={styles.productCover}
                  alt="cover"
                />
              </div>
              <div className={styles.productInfo}>
                <h3>{item.title}</h3>
                <div>
                  <span>{item.content}</span>
                </div>
                <div>
                  <span>{item.price} 원</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Product;
