import styles from './Spinner.module.css';
export default function Spinner() {
	return (
		<div className={styles.container}>
			<div className={styles.circle}>
				<div className={styles.innerCircle}></div>
				<div className={styles.rotate}></div>
			</div>
		</div>
	);
}
