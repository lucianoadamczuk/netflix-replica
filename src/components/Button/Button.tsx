import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
	secondary?: boolean;
	svg?: ReactNode;
	text: string;
	onClick?: () => void;
}

export default function Button({ secondary, text, svg, onClick }: Props) {
	return (
		<button
			className={`${styles.button} ${secondary && styles.secondary}`}
			onClick={onClick}
		>
			{svg}
			<h6> {text} </h6>
		</button>
	);
}
