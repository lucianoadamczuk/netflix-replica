import { ReactNode } from 'react';
import styles from './List.module.css';

interface Props {
	title: string;
	children: ReactNode;
}

export default function List({ title, children }: Props) {
	return (
		<div className={styles.container}>
			<h5> {title} </h5>
			<ul>{children}</ul>
		</div>
	);
}
