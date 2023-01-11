import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Recent.module.css";

const Recent = () => {
  const recent = useSelector((state) => {
    return state.userRecent;
  });
  return (
    <>
      {recent.length > 0 ? (
        <div className={styles.recentBar}>
          <div className={styles.recentBox}>
            <span className={styles.recentTitle}>최근 본 상품</span>
            {recent.length >= 5 ? (
              <span className={styles.recentNav}>
                <i className="fa-solid fa-caret-down"></i>
              </span>
            ) : null}
            <div className={styles.recentWrap}>
              <ul className={styles.recentList}>
                {recent.map((item) => {
                  return (
                    <li className={styles.recentItem} key={item.id}>
                      <Link to={`/detail/${item.id}`}>
                        <img
                          alt="cover"
                          src={`${process.env.PUBLIC_URL}${item.cover}${
                            parseInt(item.id) + 1
                          }.jpg`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Recent;
