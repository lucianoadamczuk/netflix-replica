import { useContext, useEffect } from 'react';
import { API_TMDB } from '../api';
import { ContextByGenre } from '../context';
import { InterfaceResponse, InterfaceSerie } from '../interfaces';

export default function useAllSeries() {
	const context = useContext(ContextByGenre);

	if (!context) {
		throw new Error('useAllSeries has to be used inside of ProviderByGenre');
	}

	const { dataSeries, setDataSeries } = context;

	async function getAllSeries({
		ID,
		genre,
	}: {
		ID: number;
		genre: string;
	}): Promise<InterfaceResponse<InterfaceSerie[]> | void> {
		/* ----------------------------------- url ---------------------------------- */
		const URL =
			API_TMDB.base +
			'discover/tv' +
			API_TMDB.key +
			`&with_genres=${ID.toString()}`;

		/* -------------------------------- api call -------------------------------- */
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR!: Status ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceSerie[]> =
				await request.json();

			/* ----------------- conditional to prevend code duplication ---------------- */
			setDataSeries((prevState) =>
				prevState.some((item) => item.genre === genre)
					? prevState
					: [...prevState, { ID: ID, genre: genre, series: response.results }]
			);
		} catch (error) {
			console.log('Error getting all movies', error);
		}
	}

	// To avoid unnecessary API calls, the first conditional checks if the length of dataMovies is equal to the number of available genres.
	useEffect(() => {
		if (dataSeries.length !== API_TMDB.serieGenres.length) {
			API_TMDB.serieGenres.forEach(({ id, genre }) => {
				getAllSeries({ ID: id, genre: genre });
			});
		}
	}, []);

	return { dataSeries };
}
