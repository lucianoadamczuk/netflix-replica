import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import {
  CarouselHeader,
  CarouselResponsive,
  SlideHeader,
} from "../../components";
import SlideMedia from "../../components/SlideMedia/SlideMedia";

import styles from "./PageMovies.module.css";

export default function PageMovies() {
  const loadingSlides = 10;
  return (
    <>
      <header className={styles.header}>
        <CarouselHeader>
          {Array.from({ length: loadingSlides }).map(() => (
            <SwiperSlide key={uuidv4()}>
              <SlideHeader loading />
            </SwiperSlide>
          ))}
        </CarouselHeader>
      </header>

      <main className={styles.main}>
        <CarouselResponsive XS={1.2} S={2.2} M={3.2} L={4.2} XL={5.2} XXL={6.2}>
          {Array.from({ length: loadingSlides }).map(() => (
            <SwiperSlide key={uuidv4()}>
              <SlideMedia loading />
            </SwiperSlide>
          ))}
        </CarouselResponsive>
      </main>
    </>
  );
}
