import { API_TMDB } from '../../api';
import { VIEWPORT } from '../../constants';
import styles from './CardMedia.module.css';
interface Props {
	name: string;
	releaseDate?: string;
	poster: string;
	onClick?: () => void;
}

export default function CardMedia({
	name,
	releaseDate,
	poster,
	onClick,
}: Props) {
	return (
		<article className={styles.card} onClick={onClick}>
			<div className={styles.imageContainer}>
				<picture className={styles.image}>
					<source
						media={`(min-width: ${VIEWPORT.L})`}
						srcSet={API_TMDB.poster_XL + poster}
					/>

					<img
						src={API_TMDB.poster_SM + poster}
						alt={`A poster of ${name} `}
						loading='lazy'
						className={styles.image}
					/>
				</picture>
			</div>
			<h6> {name} </h6>
			<span> {releaseDate} </span>
		</article>
	);
}
