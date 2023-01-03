import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./share.css";
import styles from "./Detail.module.css";

const Detail = ({ product }) => {
  const { favorite, cart } = useSelector((state) => {
    return state.localKey;
  });
  let localFavorite = localStorage.getItem(favorite);
  if (!localFavorite) {
    localStorage.setItem(favorite, JSON.stringify([]));
    localFavorite = localStorage.getItem(favorite);
  }
  let localCart = localStorage.getItem(cart);
  if (!localCart) {
    localStorage.setItem(cart, JSON.stringify([]));
    localCart = localStorage.getItem(cart);
  }

  const [favoriteItem, setFavorite] = useState(JSON.parse(localFavorite));
  const [cartItem, setCart] = useState(JSON.parse(localCart));

  const { id } = useParams();
  let copy = [...product].filter((item) => {
    return item.id === parseInt(id);
  });
  const [target] = copy;
  return (
    <div className="container">
      <div className={styles.productDetail}>
        <img
          alt="cover"
          src={`${process.env.PUBLIC_URL}${target.cover}${
            parseInt(id) + 1
          }.jpg`}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{target.title}</h1>
          <h2 className={styles.productContent}>{target.content}</h2>
          <h2 className={styles.productPrice}>{`${target.price} 원`}</h2>
          <div className={styles.subInfo}>
            <div className={styles.subContent}>
              <dl>
                <dt>배송</dt>
                <dd>
                  <p>해외배송</p>
                </dd>
              </dl>
            </div>
            <div className={styles.subContent}>
              <dl>
                <dt>판매자</dt>
                <dd>
                  <p>ReactShop</p>
                </dd>
              </dl>
            </div>
            <div className={styles.subContent}>
              <dl>
                <dt>포장타입</dt>
                <dd>
                  <p>박스포장</p>
                </dd>
              </dl>
            </div>
            <div className={styles.subContent}>
              <dl>
                <dt>색상</dt>
                <dd>
                  <p>{target.color}</p>
                </dd>
              </dl>
            </div>
            <div className={styles.orderBox}>
              <button
                className={styles.favoriteBtn}
                onClick={() => {
                  let copy = [...favoriteItem];
                  const overlap = copy.find((item) => {
                    return item.id === target.id;
                  });
                  if (overlap) {
                    alert("이미 찜목록에 있는 상품입니다.");
                    return;
                  }
                  copy.push(target);
                  setFavorite(copy);
                  localStorage.setItem(favorite, JSON.stringify(copy));
                  alert("상품이 찜목록에 추가되었습니다.");
                }}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
              <div
                style={{
                  width: "10px",
                }}
              ></div>
              <button
                className={styles.orderBtn}
                onClick={() => {
                  let copy = [...cartItem];
                  const overlap = copy.findIndex((item) => {
                    return item.id === target.id;
                  });
                  if (overlap < 0) {
                    const info = {
                      id: target.id,
                      cover: target.cover,
                      title: target.title,
                      price: target.price,
                      count: 1,
                    };
                    copy.push(info);
                  } else {
                    copy[overlap].count = copy[overlap].count + 1;
                  }
                  setCart(copy);
                  localStorage.setItem(cart, JSON.stringify(copy));
                  alert("상품이 장바구니에 추가되었습니다.");
                }}
              >
                장바구니 담기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
