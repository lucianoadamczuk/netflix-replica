import { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { API_TMDB } from '../api';
import { ContextDetails } from '../context/ContextDetails';
import {
	InterfaceMovie,
	InterfaceResponse,
	InterfaceSerie,
} from '../interfaces';

export default function useRelated() {
	const context = useContext(ContextDetails);

	if (!context) {
		throw new Error('useRelated has to be used inside of ProviderDetails');
	}

	const { related, setRelated } = context;

	const params = useParams();
	const location = useLocation();
	const pathname = location.pathname;

	const media = pathname.includes('/movies') ? 'movie' : 'tv';
	const ID = params.ID;

	async function getRelated() {
		const URL = API_TMDB.base + `${media}/${ID}/recommendations` + API_TMDB.key;
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceMovie[] | InterfaceSerie[]> =
				await request.json();
			setRelated(response.results);
		} catch (error) {
			console.log('Error getting related media', error);
		}
	}

	useEffect(() => {
		getRelated();
	}, [media, ID]);

	return { related };
}
