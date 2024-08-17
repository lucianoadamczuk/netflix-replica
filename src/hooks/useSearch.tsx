import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ContextSearch } from '../context';
import { API_TMDB } from '../api';
import { InterfaceResponse, InterfaceSearch } from '../interfaces';

export default function useSearch() {
	const context = useContext(ContextSearch);

	if (!context) {
		throw new Error('useSearch as to be used inside of ProviderSearch');
	}

	const { data, setData } = context;

	// params
	const [searchParams] = useSearchParams();
	const title_param = searchParams.get('title');
	const page_param = searchParams.get('page');

	const navigate = useNavigate();

	// when page loads and if there is not value to search.
	useEffect(() => {
		if (!title_param) {
			navigate('/movies');
		}
	}, []);

	/* -------------------------- function to get data -------------------------- */
	async function get() {
		const URL =
			API_TMDB.base +
			'search/collection' +
			API_TMDB.key +
			`&query=${title_param}` +
			`&page=${page_param}`;
		try {
			const request = await fetch(URL);
			if (!request.ok) {
				throw new Error(`HTTP ERROR! Status: ${request.status}`);
			}
			const response: InterfaceResponse<InterfaceSearch[]> =
				await request.json();
			setData((prevState) => {
				if (page_param === '1' || !prevState) return response;
				else {
					function filterOut(
						prevResults: InterfaceSearch[],
						newResults: InterfaceSearch[]
					) {
						const existingIDs = new Set(prevResults.map((item) => item.id));
						const filterResults = newResults.filter(
							(item) => !existingIDs.has(item.id)
						);
						return filterResults;
					}
					return {
						page: response.page,
						results: [
							...prevState.results,
							...filterOut(prevState.results, response.results),
						],
						total_pages: prevState.total_pages,
						total_results: prevState.total_results,
					};
				}
			});
		} catch (error) {
			console.log('Error searching data', error);
		}
	}

	useEffect(() => {
		get();
	}, [title_param, page_param]);

	return { data };
}
