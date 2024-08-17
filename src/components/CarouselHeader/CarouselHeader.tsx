// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade } from 'swiper/modules';
import SlideHeader from '../SlideHeader/SlideHeader';
import { InterfaceMovie, InterfaceSerie } from '../../interfaces';

import styles from './CarouselHeader.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
	displayMovies?: InterfaceMovie[];
	displaySeries?: InterfaceSerie[];
}

export default function CarouselHeader({
	displayMovies,
	displaySeries,
}: Props) {
	const navigate = useNavigate();
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade]}
				className={styles.carousel}
			>
				{/* movies */}
				{displayMovies?.map(
					({
						id,
						title,
						overview: description,
						poster_path: poster,
						backdrop_path: backdrop,
					}) => (
						<SwiperSlide key={id}>
							<SlideHeader
								title={title}
								description={description}
								poster={poster}
								backdrop={backdrop}
								onClick={() => navigate(`details/${id}`)}
							/>
						</SwiperSlide>
					)
				)}

				{/* series */}
				{displaySeries?.map(
					({
						id,
						name: title,
						overview: description,
						poster_path: poster,
						backdrop_path: backdrop,
					}) => (
						<SwiperSlide key={id}>
							<SlideHeader
								title={title}
								description={description}
								poster={poster}
								backdrop={backdrop}
								onClick={() => navigate(`details/${id}`)}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</>
	);
}
