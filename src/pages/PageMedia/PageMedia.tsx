import { SwiperSlide } from "swiper/react";
import { CarouselResponsive } from "../../components";
import { CarouselHeader } from "./components";
import styles from "./PageMedia.module.css";
import SlideMedia from "../../components/SlideMedia/SlideMedia";
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
            <SwiperSlide>
              <SlideMedia />
            </SwiperSlide>
          ))}
        </CarouselResponsive>
      </main>
    </>
  );
}
