import styles from "./SlideSeason.module.css";
export default function CardSeason() {
  return (
    <article className={styles.slideSeason}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <h6>Season Name</h6>
    </article>
  );
}
