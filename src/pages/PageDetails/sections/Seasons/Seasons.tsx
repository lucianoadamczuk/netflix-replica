import { SwiperSlide } from "swiper/react";
import { CarouselResponsive, Modal } from "../../../../components";

import styles from "./Seasons.module.css";
import { SlideSeason } from "./components";
import { useState } from "react";

// TODO
// add props
// add images

export default function Seasons() {
  // Modal states
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className={styles.container}>
      <h5>Seasons</h5>
      <CarouselResponsive XS={1.2} S={2.2} M={3.2} L={4.2} XL={5.2} XXL={6.2}>
        <SwiperSlide onClick={() => setIsOpen(true)}>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide onClick={() => setIsOpen(true)}>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide onClick={() => setIsOpen(true)}>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide onClick={() => setIsOpen(true)}>
          <SlideSeason />
        </SwiperSlide>

        <SwiperSlide onClick={() => setIsOpen(true)}>
          <SlideSeason />
        </SwiperSlide>
      </CarouselResponsive>

      <Modal isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>modal</p>
      </Modal>
    </section>
  );
}
