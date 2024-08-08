import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { CarouselResponsive } from "../../components";
import SlideMedia from "../../components/SlideMedia/SlideMedia";
import { CarouselHeader } from "./components";
import styles from "./PageMedia.module.css";

export default function PageMedia() {
  const loadingSlides = 10;
  return (
    <>
      <header className={styles.header}>
        <CarouselHeader />
      </header>

      <main className={styles.main}>
        <CarouselResponsive XS={1.2} S={2.2} M={3.2} L={4.2} XL={5.2} XXL={6.2}>
          {Array.from({ length: loadingSlides }).map(() => (
            <SwiperSlide key={uuidv4()}>
              <SlideMedia />
            </SwiperSlide>
          ))}
        </CarouselResponsive>
      </main>
    </>
  );
}
