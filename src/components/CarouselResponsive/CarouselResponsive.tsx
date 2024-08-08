// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SlideMedia from "../SlideMedia/SlideMedia";

export default function CarouselResponsive() {
  return (
    <section>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 2.3,
          },
          640: {
            slidesPerView: 3.3,
          },
          768: {
            slidesPerView: 4.3,
          },
          1024: {
            slidesPerView: 5.3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
        <SwiperSlide>
          <SlideMedia />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
