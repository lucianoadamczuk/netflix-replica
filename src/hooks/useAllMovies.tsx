import { useContext, useEffect } from 'react';
import { ContextByGenre } from '../context';
import { API_TMDB } from '../api';
import { InterfaceMovie, InterfaceResponse } from '../interfaces';

export default function useAllMovies() {
	const context = useContext(ContextByGenre);

	if (!context) {
		throw new Error('useAllMovies has to be used inside of ProviderByGenre');
	}

	const { dataMovies, setDataMovies } = context;

	async function getAllMovies({
		ID,
		genre,
	}: {
		ID: number;
		genre: string;
	}): Promise<InterfaceResponse<InterfaceMovie[]> | void> {
		/* ----------------------------------- url ---------------------------------- */
		const URL =
			API_TMDB.base +
			'discover/movie' +
			API_TMDB.key +
			`&with_genres=${ID.toString()}`;

		/* -------------------------------- api call -------------------------------- */
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR!: Status ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceMovie[]> =
				await request.json();

			/* ----------------- conditional to prevend code duplication ---------------- */
			setDataMovies((prevState) =>
				prevState.some((item) => item.genre === genre)
					? prevState
					: [...prevState, { ID: ID, genre: genre, movies: response.results }]
			);
		} catch (error) {
			console.log('Error getting all movies', error);
		}
	}

	// To avoid unnecessary API calls, the first conditional checks if the length of dataMovies is equal to the number of available genres.
	useEffect(() => {
		if (dataMovies.length !== API_TMDB.movieGenres.length) {
			API_TMDB.movieGenres.forEach(({ id, genre }) => {
				getAllMovies({ ID: id, genre: genre });
			});
		}
	}, []);

	return { dataMovies };
}
