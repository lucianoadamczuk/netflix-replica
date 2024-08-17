import { API_TMDB } from '../../api';
import { VIEWPORT } from '../../constants';
import styles from './SlideMedia.module.css';

interface Props {
	name: string;
	backdrop: string;
}
export default function SlideMedia({ name, backdrop }: Props) {
	return (
		<div className={styles.slide}>
			{/* images */}
			<picture className={styles.image}>
				<source
					media={`(min-width: ${VIEWPORT.L})`}
					srcSet={API_TMDB.backdrop_XL + backdrop}
				/>

				<img
					src={API_TMDB.backdrop_SM + backdrop}
					alt={`A poster of ${name} `}
					loading='lazy'
					className={styles.image}
				/>
			</picture>

			{/* name */}
			<h6 className={styles.name}>{name}</h6>
		</div>
	);
}
