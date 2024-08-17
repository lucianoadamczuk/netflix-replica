import { List } from '../../../../components';
import {
	InterfaceMovieDetails,
	InterfaceSerieDetails,
} from '../../../../interfaces';
import styles from './MainInformation.module.css';

interface Props {
	dataDetails: InterfaceMovieDetails | InterfaceSerieDetails;
}
export default function MainInformation({ dataDetails }: Props) {
	return (
		<div className={styles.mainInformation}>
			{/* description */}
			<section className={styles.description}>
				<h5>Description</h5>
				<p>{dataDetails.overview}</p>
			</section>

			{/* Genres */}
			<section className={styles.genres}>
				<List title='Genres'>
					{dataDetails?.genres?.map((genre) => (
						<li key={genre.id}> {genre.name} </li>
					))}
				</List>
			</section>

			{/* companies */}
			<section className={styles.companies}>
				<List title='Companies'>
					{dataDetails?.production_companies?.map(({ id, name }) => (
						<li key={id}> {name} </li>
					))}
				</List>
			</section>

			{/* Languages */}
			<section className={styles.languages}>
				<List title='Languages'>
					{dataDetails?.spoken_languages?.map(
						({ english_name: name, iso_639_1 }) => (
							<li key={name + iso_639_1}>
								{name} - {iso_639_1}
							</li>
						)
					)}
				</List>
			</section>
		</div>
	);
}
