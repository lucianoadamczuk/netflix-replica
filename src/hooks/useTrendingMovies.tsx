import { useContext, useEffect } from 'react';
import { ContextByGenre } from '../context';
import { API_TMDB } from '../api';
import { InterfaceMovie, InterfaceResponse } from '../interfaces';

export default function useTrendingMovies() {
	const context = useContext(ContextByGenre);
	if (!context) {
		throw new Error(
			'UseTrendingMovies has to be used inside of ProviderByGenre'
		);
	}

	const { trendingMovies, setTrendingMovies } = context;

	async function getTrendingMovies(): Promise<void> {
		const URL = API_TMDB.base + 'trending/movie/week' + API_TMDB.key;
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceMovie[]> =
				await request.json();
			setTrendingMovies(response.results);
		} catch (error) {
			console.log('Error getting trending movies', error);
		}
	}
	useEffect(() => {
		if (trendingMovies.length === 0) {
			getTrendingMovies();
		}
	}, []);

	return { trendingMovies };
}
