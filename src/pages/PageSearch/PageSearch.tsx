import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, CardMedia, Spinner } from '../../components';
import { useSearch } from '../../hooks';
import styles from './PageSearch.module.css';
import { ContextModal } from '../../context';
export default function PageSearch() {
	const [searchParams, setSearchParams] = useSearchParams();

	const { data } = useSearch();

	useEffect(() => {
		function handleScroll() {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// ensure it has the necessary parameters and haven't reached the last page
			const page = (data && data?.page) || 1;
			const total_pages = (data && data?.total_pages) || 1;
			if (page < total_pages) {
				if (scrollY + windowHeight >= documentHeight - 250) {
					const page_param = searchParams.get('page');
					const updateParam = new URLSearchParams(searchParams);
					const increasedParam = page_param
						? (Number(page_param) + 1).toString()
						: '1';
					updateParam.set('page', increasedParam);
					setSearchParams(updateParam);
				}
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [data]); //data dependecy is required due to a delay in page and total_pages

	const contextModal = useContext(ContextModal);
	if (!contextModal) {
		throw new Error('ContextModal has to be used inside of a ModalProvider');
	}
	const { setIsOpen } = contextModal;

	const title_param = searchParams.get('title');
	const navigate = useNavigate();
	if (data === undefined) {
		return <Spinner />;
	}

	if (data?.results?.length === 0) {
		return (
			<section className={styles.noMatchesSection}>
				<div>
					<h4>Ups! It seems we have an error here:</h4>
					<p>
						There is not matches for
						{title_param?.replace(/-/g, ' ')}
					</p>
				</div>
				<p>Why don't you try with a movie or serie title?</p>

				<Button text='Home' onClick={() => navigate('/movies')} />
			</section>
		);
	}

	if (data?.results?.length > 0) {
		return (
			<section className={styles.section}>
				{data?.results.map(({ id, name, poster_path: poster }) => (
					<CardMedia
						key={id}
						name={name}
						poster={poster}
						onClick={() => setIsOpen(true)}
					/>
				))}
			</section>
		);
	}
}
