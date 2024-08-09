// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { ReactNode } from "react";
import { VIEWPORT } from "../../constants";

interface Props {
  children: ReactNode;
}
export default function CarouselResponsive({ children }: Props) {
  // component props
  const SWIPER_RESPONSIVE_PROPS = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      [VIEWPORT.S]: {
        slidesPerView: 2.2,
      },
      [VIEWPORT.M]: {
        slidesPerView: 3.2,
      },
      [VIEWPORT.L]: {
        slidesPerView: 4.2,
      },
      [VIEWPORT.XL]: {
        slidesPerView: 5.2,
      },
      [VIEWPORT.XXL]: {
        slidesPerView: 6.2,
      },
    },
  };

  return (
    <>
      <Swiper {...SWIPER_RESPONSIVE_PROPS} className="mySwiper">
        {children}
      </Swiper>
    </>
  );
}
