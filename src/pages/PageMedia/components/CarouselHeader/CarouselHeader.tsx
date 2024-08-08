// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import styles from "./CarouselHeader.module.css";
import SlideHeader from "../SlideHeader/SlideHeader";

export default function CarouselHeader() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.carousel}
      >
        <SwiperSlide>
          <SlideHeader />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeader />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeader />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeader />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeader />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
