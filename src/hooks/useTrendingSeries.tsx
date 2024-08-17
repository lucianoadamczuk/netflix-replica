import { useContext, useEffect } from 'react';
import { API_TMDB } from '../api';
import { ContextByGenre } from '../context';
import { InterfaceResponse, InterfaceSerie } from '../interfaces';

export default function useTrendingSeries() {
	const context = useContext(ContextByGenre);
	if (!context) {
		throw new Error(
			'UseTrendingSeries has to be used inside of ProviderByGenre'
		);
	}

	const { trendingSeries, setTrendingSeries } = context;

	async function getTrendingSeries(): Promise<void> {
		const URL = API_TMDB.base + 'trending/tv/week' + API_TMDB.key;
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceSerie[]> =
				await request.json();
			setTrendingSeries(response.results);
		} catch (error) {
			console.log('Error getting trending series', error);
		}
	}
	useEffect(() => {
		if (trendingSeries.length === 0) {
			getTrendingSeries();
		}
	}, []);

	return { trendingSeries };
}
