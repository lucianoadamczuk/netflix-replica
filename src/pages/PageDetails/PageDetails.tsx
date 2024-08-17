import { useLocation, useNavigate } from 'react-router-dom';
import { Button, CarouselResponsive, Spinner } from '../../components';
import { useDetails, useRelated, useTrailers } from '../../hooks';

import {
	InterfaceMovie,
	InterfaceSerie,
	InterfaceSerieDetails,
} from '../../interfaces';
import styles from './PageDetails.module.css';
import { Header, MainInformation, Trailers } from './sections';

export default function PageDetails() {
	const location = useLocation();

	const navigate = useNavigate();

	const { dataDetails } = useDetails();
	const { trailers } = useTrailers();
	const { related } = useRelated();

	// while the data is fetching
	if (dataDetails === undefined) {
		return <Spinner />;
	}

	// when there is no match
	if (dataDetails === null) {
		return (
			<section className={styles.notFound}>
				<h3>Ups!</h3>
				<p>It seems to be there is no result for this search</p>

				<Button text='Go back' onClick={() => navigate('/movies')} />
			</section>
		);
	}

	// when there is a match
	if (dataDetails) {
		return (
			<>
				<Header dataDetails={dataDetails} />
				<main className={styles.main}>
					{/* main information */}
					<MainInformation dataDetails={dataDetails} />

					{/* seasons */}
					{location.pathname.includes('/series') && (
						<CarouselResponsive
							title='Seasons'
							displaySeasons={(dataDetails as InterfaceSerieDetails).seasons}
						/>
					)}

					{/* trailers */}
					<Trailers trailers={trailers} />

					{/* related */}
					{related && location.pathname.includes('/movies') ? (
						<CarouselResponsive
							title='Related Movies'
							displayMovies={related as InterfaceMovie[]}
						/>
					) : (
						<CarouselResponsive
							title='Related Series'
							displaySeries={related as InterfaceSerie[]}
						/>
					)}
				</main>
			</>
		);
	}
}
