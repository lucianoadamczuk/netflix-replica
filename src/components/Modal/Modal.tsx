import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextModal } from '../../context';
import { IconX } from '../../icons';
import styles from './Modal.module.css';

export default function Modal() {
	const context = useContext(ContextModal);
	if (!context) {
		throw new Error('ContextModal has to be inside of ProviderModal');
	}
	const { isOpen, setIsOpen } = context;

	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<div
			className={styles.modal}
			style={isOpen ? { display: 'flex' } : { display: 'none' }}
		>
			<IconX onClick={() => setIsOpen(false)} />
			<h3>Ey!</h3>
			<h5>Why don't you hire me?</h5>

			<p>Email: lucianoadamczuk@gmail.com</p>
			<p>Phone: +54 9 11 5337 6931</p>
		</div>
	);
}
