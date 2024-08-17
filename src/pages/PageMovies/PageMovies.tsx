import { useEffect, useState } from 'react';
import { useAllMovies, useTrendingMovies } from '../../hooks';
import { CarouselHeader, CarouselResponsive } from '../../components';

import styles from './PageMovie.module.css';
export default function PageMovies() {
	const { trendingMovies } = useTrendingMovies();
	const { dataMovies } = useAllMovies();

	const [sliceMovies, setSliceMovies] = useState<boolean>(true);

	function handleScroll() {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollY + windowHeight >= documentHeight - 100) {
			setSliceMovies(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<header>
				{trendingMovies && <CarouselHeader displayMovies={trendingMovies} />}
			</header>
			<main className={styles.main}>
				{dataMovies
					?.slice(0, sliceMovies ? 10 : undefined)
					.map(({ ID, genre, movies }) => (
						<CarouselResponsive
							key={`movies_with_id_${ID}`}
							title={genre}
							displayMovies={movies}
						/>
					))}
			</main>
		</>
	);
}
