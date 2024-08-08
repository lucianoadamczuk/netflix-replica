import { SwiperSlide } from "swiper/react";
import { CarouselResponsive } from "../../../../components";

import styles from "./Seasons.module.css";
import { SlideSeason } from "./components";

// TODO
// add props
// add images

export default function Seasons() {
  return (
    <section className={styles.container}>
      <h5>Seasons</h5>
      <CarouselResponsive XS={1.2} S={2.2} M={3.2} L={4.2} XL={5.2} XXL={6.2}>
        <SwiperSlide>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide>
          <SlideSeason />
        </SwiperSlide>
      </CarouselResponsive>
    </section>
  );
}
