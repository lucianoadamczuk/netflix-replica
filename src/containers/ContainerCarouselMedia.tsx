import { SwiperSlide } from "swiper/react";
import { CarouselResponsive, SlideMedia } from "../components";
import { Movie } from "../interfaces";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";

interface Props {
  display: undefined | [] | Array<{ genre: string; data: Movie[] }>;
}

export default function ContainerCarouselMedia({ display }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  if (display !== undefined && display.length === 0) {
    return Array.from({ length: 5 }).map(() => (
      <CarouselResponsive key={uuidv4()}>
        {Array.from({ length: 10 }).map(() => (
          <SwiperSlide key={uuidv4()}>
            <SlideMedia loading />
          </SwiperSlide>
        ))}
      </CarouselResponsive>
    ));
  }

  if (display && display.length >= 1) {
    return display.map((element) => (
      <CarouselResponsive key={`movies_with_genre_${element.genre}`}>
        {element.data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`${pathname}/details/${item.id}`}>
              <SlideMedia title={item.title} />
            </Link>
          </SwiperSlide>
        ))}
      </CarouselResponsive>
    ));
  }
}
