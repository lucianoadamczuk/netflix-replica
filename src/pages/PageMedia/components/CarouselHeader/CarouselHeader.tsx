// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import { ReactNode } from "react";
import styles from "./CarouselHeader.module.css";

interface Props {
  children: ReactNode;
}

export default function CarouselHeader({ children }: Props) {
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
        {children}
      </Swiper>
    </>
  );
}
