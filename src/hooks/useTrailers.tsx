import { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { API_TMDB } from '../api';
import { ContextDetails } from '../context/ContextDetails';
import { InterfaceTrailer } from '../interfaces';

export default function useTrailers() {
	const context = useContext(ContextDetails);

	if (!context) {
		throw new Error('useTrailers has to be inside of ProviderDetails');
	}

	const { trailers, setTrailers } = context;
	const params = useParams();
	const location = useLocation();
	const pathname = location.pathname;

	const media = pathname.includes('/movies') ? 'movie' : 'tv';
	const ID = params.ID;

	async function getTrailers() {
		const URL = API_TMDB.base + `${media}/${ID}/videos` + API_TMDB.key;

		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			type TypesResponse = { results: InterfaceTrailer[] };
			const response: TypesResponse = await request.json();

			setTrailers(response.results);
		} catch (error) {
			console.log('Error getting trailers', error);
		}
	}

	useEffect(() => {
		getTrailers();
	}, [media]);
	return { trailers };
}
