// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  children: ReactNode;
}

const small;

/**
 * @description
 * Carousel to display data.
 *
 * @param {Props} props - Props component
 * @param {number} props.XS - Size for XS pixeles devices
 * @param {number} props.S - Size for M pixeles devices
 * @param {number} props.M - Size for L pixeles devices
 * @param {number} props.L - Size for XL pixeles devices
 * @param {number} props.XL - Size for  pixeles devices
 *  @param {number} props.XXL - Size for  pixeles devices
 * @returns
 */

export default function CarouselResponsive({
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  children,
}: Props) {
  return (
    <section>
      <Swiper
        slidesPerView={XS}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: S,
          },
          640: {
            slidesPerView: M,
          },
          768: {
            slidesPerView: L,
          },
          1024: {
            slidesPerView: XL,
          },
          1400: {
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
