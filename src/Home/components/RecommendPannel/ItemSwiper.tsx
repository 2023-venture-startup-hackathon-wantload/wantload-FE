// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import styled from "styled-components";
import "./swiper.css";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

export default function ItemSwiper() {
  const navigate = useNavigate();

  return (
    <Swiper
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper3.png"
          style={{ width: "375px", height: "358px" }}
          onClick={() => {
            navigate("/event");
          }}
        />
      </SwiperSlide>
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
    </Swiper>
  );
}
