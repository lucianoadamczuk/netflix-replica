import { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { API_TMDB } from '../api';
import { ContextDetails } from '../context/ContextDetails';
import { InterfaceMovieDetails } from '../interfaces/InterfaceMovieDetails';
import { InterfaceSerieDetails } from '../interfaces';

export default function useDetails() {
	const context = useContext(ContextDetails);

	if (!context) {
		throw new Error('useDetails has to be used inside of a ProviderDetails');
	}

	const { dataDetails, setDataDetails } = context;

	const params = useParams();
	const location = useLocation();
	const pathname = location.pathname;

	const media = pathname.includes('/movies') ? 'movie' : 'tv';
	const ID = params.ID;

	async function getDetails() {
		setDataDetails(undefined);
		const URL = API_TMDB.base + `${media}/${ID}` + API_TMDB.key;
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			const response:
				| undefined
				| InterfaceMovieDetails
				| InterfaceSerieDetails = await request.json();
			setDataDetails(response);
		} catch (error) {
			console.log('Error getting details', error);
			setDataDetails(null);
		}
	}

	useEffect(() => {
		getDetails();
	}, [media, ID]);

	return { dataDetails };
}
