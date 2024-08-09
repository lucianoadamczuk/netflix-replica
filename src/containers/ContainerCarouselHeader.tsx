import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { CarouselHeader, SlideHeader, SlideMedia } from "../components";
import { Movie } from "../interfaces";

interface Props {
  display: Movie[];
}
export default function ContainerCarouselHeader({ display }: Props) {
  if (display.length === 0) {
    return (
      <>
        <CarouselHeader>
          {Array.from({ length: 5 }).map(() => (
            <SwiperSlide key={uuidv4()}>
              <SlideHeader loading />
            </SwiperSlide>
          ))}
        </CarouselHeader>
      </>
    );
  }

  if (display.length > 0) {
    return (
      <>
        <CarouselHeader>
          {display.map((item) => (
            <SwiperSlide>
              <SlideMedia key={item.id} title={item.title} />
            </SwiperSlide>
          ))}
        </CarouselHeader>
      </>
    );
  }
}
