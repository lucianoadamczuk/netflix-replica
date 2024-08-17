import { useContext } from 'react';
import { API_TMDB } from '../../../../api';
import { Button } from '../../../../components';
import { VIEWPORT } from '../../../../constants';
import {
	InterfaceMovieDetails,
	InterfaceSerieDetails,
} from '../../../../interfaces';
import { LayoutButtons } from '../../../../layouts';
import styles from './Header.module.css';
import { ContextModal } from '../../../../context';
import { IconPlay } from '../../../../icons';

interface Props {
	dataDetails: InterfaceMovieDetails | InterfaceSerieDetails;
}
export default function Header({ dataDetails }: Props) {
	// title
	const title =
		(dataDetails as InterfaceMovieDetails).title ??
		(dataDetails as InterfaceSerieDetails).name;

	// runtime
	const runtime =
		(dataDetails as InterfaceMovieDetails).runtime ??
		(dataDetails as InterfaceSerieDetails).episode_run_time;

	const context = useContext(ContextModal);
	if (!context) {
		throw new Error('ContextModal has to be used inside of ProviderModal');
	}
	const { setIsOpen } = context;

	const votes = dataDetails.vote_average;
	const voteColor =
		votes < 4
			? styles.bad
			: votes > 4 && votes < 7
			? styles.average
			: styles.good;
	return (
		<header className={styles.header}>
			<picture className={styles.image}>
				<source
					media={`(min-width: ${VIEWPORT.XL})`}
					srcSet={API_TMDB.backdrop_XL + dataDetails.backdrop_path}
				/>
				<source
					media={`(min-width: ${VIEWPORT.L})`}
					srcSet={API_TMDB.backdrop_SM + dataDetails.backdrop_path}
				/>
				<source
					media={`(min-width: ${VIEWPORT.S})`}
					srcSet={API_TMDB.poster_XL + dataDetails.poster_path}
				/>
				<img
					src={API_TMDB.poster_SM + dataDetails.poster_path}
					alt={`A poster of ${title}`}
					className={styles.image}
				/>
			</picture>
			<div>
				<span>{runtime} Minutes</span>
				<span className={voteColor}> Votes {votes} </span>
				<span>{(dataDetails as InterfaceMovieDetails).release_date}</span>
				<span> {dataDetails.adult ? '+18' : 'General Audiences'} </span>
			</div>
			{/* title */}
			<h1>{title}</h1>
			<p>{dataDetails?.tagline} </p>
			{/* button */}
			<LayoutButtons>
				<Button
					svg={<IconPlay />}
					text='Play'
					onClick={() => setIsOpen(true)}
				/>
			</LayoutButtons>
		</header>
	);
}
