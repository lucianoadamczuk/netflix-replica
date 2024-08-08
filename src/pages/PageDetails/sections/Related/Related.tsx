import { v4 as uuidv4 } from "uuid";
import { SwiperSlide } from "swiper/react";
import { CarouselResponsive } from "../../../../components";
import styles from "./Related.module.css";
import SlideMedia from "../../../../components/SlideMedia/SlideMedia";

// TODO
// add props

export default function Related() {
  const loadingSlides = 10;

  return (
    <section className={styles.container}>
      <h5>Related</h5>
      <CarouselResponsive XS={1.2} S={2.2} M={3.2} L={4.2} XL={5.2} XXL={6.2}>
        {Array.from({ length: loadingSlides }).map(() => (
          <SwiperSlide key={uuidv4()}>
            <SlideMedia />
          </SwiperSlide>
        ))}
      </CarouselResponsive>
    </section>
  );
}
