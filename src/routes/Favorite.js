import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./share.css";
import styles from "./Favorite.module.css";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();
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

  return (
    <div className="container">
      <h1 className={"pageTitle"}>찜리스트</h1>
      <ul>
        {favoriteItem.length > 0 ? (
          favoriteItem.map((item) => {
            return (
              <li key={item.id} className={styles.favoriteList}>
                <img
                  alt="cover"
                  src={`${process.env.PUBLIC_URL}${item.cover}${
                    parseInt(item.id) + 1
                  }.jpg`}
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                />
                <div className={styles.favoriteInfo}>
                  <div className={styles.infoBox}>
                    <h1
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      {item.title}
                    </h1>
                    <h2 className={styles.productContent}>{item.content}</h2>
                    <h2>{item.price} 원</h2>
                  </div>
                  <div className={styles.orderBox}>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => {
                        let copy = [...favoriteItem];
                        let index = copy.findIndex((target) => {
                          return target.id === item.id;
                        });
                        copy.splice(index, 1);
                        setFavorite(copy);
                        localStorage.setItem(favorite, JSON.stringify(copy));
                        alert("상품이 찜목록에서 제거되었습니다.");
                      }}
                    >
                      삭제
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
                        const overlap = copy.findIndex((target) => {
                          return item.id === target.id;
                        });
                        if (overlap < 0) {
                          const info = {
                            id: item.id,
                            cover: item.cover,
                            title: item.title,
                            price: item.price,
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
              </li>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>
            찜한 상품이 존재하지 않습니다.
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Favorite;
