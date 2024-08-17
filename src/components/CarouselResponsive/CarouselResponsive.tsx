// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { InterfaceMovie, InterfaceSerie, Season } from '../../interfaces';
import SlideMedia from '../SlideMedia/SlideMedia';

import { CardMedia } from '..';
import styles from './CarouselResponsive.module.css';

interface Props {
	title: string;
	displayMovies?: InterfaceMovie[];
	displaySeries?: InterfaceSerie[];
	displaySeasons?: Season[];
}

export default function CarouselResponsive({
	title,
	displayMovies,
	displaySeries,
	displaySeasons,
}: Props) {
	return (
		<div className={styles.container}>
			<h4> {title} </h4>
			<Swiper
				slidesPerView={1.2}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					3640: {
						slidesPerView: 2.2,
					},
					640: {
						slidesPerView: 3.2,
					},
					768: {
						slidesPerView: 4.2,
					},
					1024: {
						slidesPerView: 5.2,
					},
				}}
				modules={[Pagination]}
			>
				{/* movies */}
				{displayMovies?.map(({ id, title: name, backdrop_path: backdrop }) => (
					<SwiperSlide key={title + id + name}>
						<Link to={`/movies/details/${id}`}>
							<SlideMedia name={name} backdrop={backdrop} />
						</Link>
					</SwiperSlide>
				))}

				{/* series */}
				{displaySeries?.map(({ id, name, backdrop_path: backdrop }) => (
					<SwiperSlide key={title + id + name}>
						<Link to={`/series/details/${id}`}>
							<SlideMedia name={name} backdrop={backdrop} />
						</Link>
					</SwiperSlide>
				))}

				{/* seasons */}
				{displaySeasons?.map(
					({ id, name, poster_path: poster, air_date: releaseDate }) => (
						<SwiperSlide key={`season_${id}`}>
							<CardMedia
								poster={poster}
								name={name}
								releaseDate={releaseDate}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</div>
	);
}
