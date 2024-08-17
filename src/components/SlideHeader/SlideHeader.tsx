import { useContext } from 'react';
import { API_TMDB } from '../../api';
import { VIEWPORT } from '../../constants';
import { ContextModal } from '../../context';
import { LayoutButtons } from '../../layouts';
import Button from '../Button/Button';
import styles from './SlideHeader.module.css';
import { IconExclamation, IconPlay } from '../../icons';
interface Props {
	title: string;
	description: string;
	poster: string;
	backdrop: string;
	onClick: () => void;
}
export default function SlideHeader({
	title,
	description,
	poster,
	backdrop,
	onClick,
}: Props) {
	const context = useContext(ContextModal);

	if (!context) {
		throw new Error('ContextModal has to be inside of ProviderModal');
	}

	const { setIsOpen } = context;
	return (
		<article className={styles.slide}>
			<picture className={styles.image}>
				<source
					media={`(min-width: ${VIEWPORT.XL})`}
					srcSet={API_TMDB.backdrop_XL + backdrop}
				/>
				<source
					media={`(min-width: ${VIEWPORT.L})`}
					srcSet={API_TMDB.backdrop_SM + backdrop}
				/>
				<source
					media={`(min-width: ${VIEWPORT.S})`}
					srcSet={API_TMDB.poster_XL + poster}
				/>
				<img
					src={API_TMDB.poster_SM + poster}
					alt={`A poster of ${title}`}
					loading='eager'
					className={styles.image}
				/>
			</picture>

			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h3 className={styles.title}> {title}sdf </h3>
				<p className={styles.description}>{description}</p>

				<LayoutButtons>
					<Button
						svg={<IconPlay />}
						text='Play'
						onClick={() => setIsOpen(true)}
					/>
					<Button
						secondary
						svg={<IconExclamation />}
						text='More Information'
						onClick={onClick}
					/>
				</LayoutButtons>
			</div>
		</article>
	);
}
