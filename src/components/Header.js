import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartCounter } from "../store/cartCounting";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <header>
      <div className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <i className="fa-brands fa-react"></i>ReactShop
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/favorite");
              }}
            >
              <i className="fa-solid fa-heart"></i>
              {favoriteItem.length > 0 ? (
                <span className={styles.productCnt}>{favoriteItem.length}</span>
              ) : null}
            </span>
          </li>
          <li className={styles.navItem}>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/cart");
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItem.length > 0 ? (
                <span className={styles.productCnt}>{cartItem.length}</span>
              ) : null}
            </span>
          </li>
          {/* <li className={styles.navItem}>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/admin");
              }}
            >
              <i className="fa-solid fa-circle-user"></i>
            </span>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
