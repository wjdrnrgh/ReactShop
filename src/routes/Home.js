import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./share.css";
import styles from "./Home.module.css";
import Recent from "../components/Recent";
import Mainbg from "../components/Mainbg";

const Home = ({
  product,
  setProduct,
  counter,
  setCounter,
  newItem,
  apiUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "60px" }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ type: "fraction" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className={styles.mainBg}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/mainbg1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Mainbg
            mainSubTxt="Nunc porttitor ultricies leo"
            mainTxt="Lorem ipsum dolor sit amet"
            subTxt="Consectetur adipiscing elit"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/mainbg2.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Mainbg
            mainSubTxt="Placerat vel sem"
            mainTxt="Curabitur in interdum elit"
            subTxt="Aliquam lacinia ornare turpis"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/mainbg3.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Mainbg
            mainSubTxt="Maecenas dignissim"
            mainTxt="Enim turpis ullamcorper nulla"
            subTxt="Sem non aliquam bibendum"
          />
        </SwiperSlide>
      </Swiper>
      <div style={{ position: "relative" }}>
        <div className="container" style={{ margin: "0px auto" }}>
          <div className={styles.newItem}>
            <div className={styles.newItemInfo}>
              <h1 className={styles.newItemTitle}>신규상품</h1>
              <h2 className={styles.subTitle}>새롭게 입고된 신상품!</h2>
            </div>
            <div
              className={styles.newItemDetail}
              onClick={() => {
                navigate(`/detail/${newItem.id}}`);
              }}
            >
              <div className={styles.coverWrap}>
                <img
                  alt="newItemCover"
                  src={`${process.env.PUBLIC_URL}${newItem.cover}${
                    parseInt(newItem.id) + 1
                  }.jpg`}
                ></img>
                <span>NEW</span>
              </div>
              <div className={styles.descriptionWrap}>
                <h1>{newItem.content}</h1>
                <h2>
                  {newItem.title}
                  <i
                    className="fa-regular fa-circle-right"
                    style={{
                      marginLeft: "5px",
                      fontSize: "1rem",
                      color: "#5ed3f3",
                      lineHeight: "19px",
                    }}
                  ></i>
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.bestItem}>
            <h1 className={styles.productTitle}>인기상품</h1>
            <h2 className={styles.subTitle}>
              가장 인기있는 상품들을 확인해보세요!
            </h2>
            <div className={styles.productList}>
              <Product product={product} />
            </div>
            {counter >= 3 ? null : (
              <div className={styles.controller}>
                <button
                  className={styles.controllerBtn}
                  onClick={async () => {
                    const json = await axios
                      .get(`${apiUrl}${counter + 1}.json`)
                      .then((res) => {
                        return res.data;
                      });
                    let copy = [...product, ...json];
                    setProduct(copy);
                    setCounter((current) => current + 1);
                  }}
                >
                  더보기
                </button>
              </div>
            )}
          </div>
        </div>
        <Recent />
      </div>
    </div>
  );
};

export default Home;
