import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./share.css";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => {
    return state.localKey;
  });
  let localCart = localStorage.getItem(cart);
  if (!localCart) {
    localStorage.setItem(cart, JSON.stringify([]));
    localCart = localStorage.getItem(cart);
  }
  const [cartItem, setCart] = useState(JSON.parse(localCart));

  return (
    <div className="container">
      <h1 className="pageTitle">장바구니</h1>
      <ul>
        {cartItem.length > 0 ? (
          cartItem.map((item) => {
            return (
              <li key={item.id} className={styles.cartList}>
                <img
                  alt="cover"
                  src={`${process.env.PUBLIC_URL}${item.cover}${
                    parseInt(item.id) + 1
                  }.jpg`}
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                />
                <div
                  style={{
                    flex: "1",
                  }}
                >
                  <h1
                    style={{
                      cursor: "pointer",
                      fontSize: "1.3rem",
                      display: "inline-block",
                    }}
                    onClick={() => {
                      navigate(`/detail/${item.id}`);
                    }}
                  >
                    {item.title}
                  </h1>
                </div>
                <div className={styles.counter}>
                  <button
                    onClick={() => {
                      let copy = [...cartItem];
                      const overlap = copy.findIndex((target) => {
                        return item.id === target.id;
                      });
                      if (copy[overlap].count <= 1) {
                        return;
                      }
                      copy[overlap].count = copy[overlap].count - 1;
                      setCart(copy);
                      localStorage.setItem(cart, JSON.stringify(copy));
                    }}
                  >
                    -
                  </button>
                  <div>
                    <span>{item.count}</span>
                  </div>
                  <button
                    onClick={() => {
                      let copy = [...cartItem];
                      const overlap = copy.findIndex((target) => {
                        return item.id === target.id;
                      });
                      copy[overlap].count = copy[overlap].count + 1;
                      setCart(copy);
                      localStorage.setItem(cart, JSON.stringify(copy));
                    }}
                  >
                    +
                  </button>
                </div>
                <div className={styles.totalPrice}>
                  <span>
                    {parseInt(item.price.replace(",", "")) * item.count} 원
                  </span>
                </div>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    let copy = [...cartItem];
                    const index = copy.findIndex((target) => {
                      return item.id === target.id;
                    });
                    copy.splice(index, 1);
                    setCart(copy);
                    localStorage.setItem(cart, JSON.stringify(copy));
                    alert("상품이 장바구니에서 제거되었습니다.");
                  }}
                >
                  <span className={styles.lineFirst}></span>
                  <span className={styles.lineSecond}></span>
                </button>
              </li>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>
            장바구니에 등록된 상품이 없습니다.
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Cart;
