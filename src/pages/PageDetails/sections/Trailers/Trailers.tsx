import { InterfaceTrailer } from '../../../../interfaces';
import styles from './Trailers.module.css';
interface Props {
	trailers: undefined | InterfaceTrailer[];
}
export default function Trailers({ trailers }: Props) {
	return (
		<div className={styles.container}>
			<h4>Trailers</h4>
			<div className={styles.trailersContainer}>
				{trailers &&
					trailers
						?.filter((trailer) => trailer.type.toUpperCase() === 'TRAILER')
						?.map(({ id, key }) => (
							<iframe
								key={id}
								src={`https://www.youtube.com/embed/${key}`}
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
								className={styles.trailer}
							></iframe>
						))}
			</div>
		</div>
	);
}
