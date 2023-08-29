// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import styled from "styled-components";
import "./swiper.css";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

export default function ItemSwiper() {
  // const slides = [
  //   {
  //     id: 1,
  //     img: "/assets/swiper/swiper1.jpeg",
  //   },
  //   {
  //     id: 2,
  //     img: "/assets/swiper/swiper2.jpeg",
  //   },
  //   {
  //     id: 3,
  //     img: "/assets/swiper/swiper3.jpeg",
  //   },
  // ];

  return (
    <Swiper
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper1.png"
          style={{ width: "375px", height: "358px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper2.png"
          style={{ width: "375px", height: "358px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper3.png"
          style={{ width: "375px", height: "358px" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
