import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ItemSwiper() {
  return (
    <Swiper
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper1.jpeg"
          style={{ width: '331px', height: '331px', borderRadius: '8px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper2.jpeg"
          style={{ width: '331px', height: '331px', borderRadius: '8px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/swiper/swiper3.jpeg"
          style={{ width: '331px', height: '331px', borderRadius: '8px' }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
