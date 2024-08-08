// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { VIEWPORT } from "../../constants";

interface Props {
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  children: ReactNode;
}

/**
 * @description
 * Carousel to display data.
 * You can map an array as a children and, for each element, create a SwiperSlide with a slide inside.
 *
 * @param {Props} props - Props component
 * @param {ReactNode} props.children - A SwiperSlide component is required to make the carousel works
 * @param {number} props.XS - Size for {VIEWPORT.XS} pixeles devices
 * @param {number} props.S - Size for {VIEWPORT.S} pixeles devices
 * @param {number} props.M - Size for {VIEWPORT.M} pixeles devices
 * @param {number} props.L - Size for {VIEWPORT.L} pixeles devices
 * @param {number} props.XL - Size for {VIEWPORT.XL} pixeles devices
 * @param {number} props.XXL - Size for {VIEWPORT.XXL} pixeles devices
 * @returns {ReactNode}
 */

export default function CarouselResponsive({
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  children,
}: Props): ReactNode {
  return (
    <section>
      <Swiper
        slidesPerView={XS}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          [VIEWPORT.S]: {
            slidesPerView: S,
          },
          [VIEWPORT.M]: {
            slidesPerView: M,
          },
          [VIEWPORT.L]: {
            slidesPerView: L,
          },
          [VIEWPORT.XL]: {
            slidesPerView: XL,
          },
          [VIEWPORT.XXL]: {
            slidesPerView: XXL,
          },
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </section>
  );
}
