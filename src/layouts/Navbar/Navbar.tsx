import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_TMDB } from '../../api';
import { IconMenu, IconX } from '../../icons';
import Input from './Input';
import styles from './Navbar.module.css';

export default function Navbar() {
	// handle close navbar when url changes
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	// background animation when scroll
	const [height, setHeight] = useState<number>(window.scrollY);
	function handleScroll() {
		setHeight(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${styles.navbar} ${
				height > 100 || isOpen ? styles.fullColor : ''
			}  `}
		>
			<img
				src={API_TMDB.poster_SM + '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'}
				alt='Netflix logo'
				className={styles.logo}
			/>
			<div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
				{!isOpen ? <IconMenu /> : <IconX />}
			</div>
			<section
				className={`${styles.linksContainer} ${isOpen && styles.isOpen}`}
			>
				<Link to='/movies'> Movies </Link>
				<Link to='/series'> Series </Link>
				<Input />
			</section>
		</nav>
	);
}
