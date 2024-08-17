import { useEffect, useState } from 'react';
import { CarouselHeader, CarouselResponsive } from '../../components';
import { useAllSeries, useTrendingSeries } from '../../hooks';
import styles from './PageSeries.module.css';

export default function PageSeries() {
	// data to display
	const { trendingSeries } = useTrendingSeries();
	const { dataSeries } = useAllSeries();

	//detect if the user is at the end of the page to slice movies and series.
	const [sliceSeries, setSliceSeries] = useState<boolean>(true);

	function handleScroll() {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollY + windowHeight >= documentHeight - 100) {
			setSliceSeries(false);
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
				{trendingSeries && <CarouselHeader displaySeries={trendingSeries} />}
			</header>
			<main className={styles.main}>
				{dataSeries
					?.slice(0, sliceSeries ? 10 : undefined)
					.map(({ ID, genre, series }) => (
						<CarouselResponsive
							key={`series_with_id_${ID}`}
							title={genre}
							displaySeries={series}
						/>
					))}
			</main>
		</>
	);
}
