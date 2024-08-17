import { ReactNode } from 'react';

import styles from './LayoutButtons.module.css';
interface Props {
	children: ReactNode;
}
export default function LayoutButtons({ children }: Props) {
	return <div className={styles.container}>{children}</div>;
}
