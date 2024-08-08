import styles from "./Trailers.module.css";

export default function Trailers() {
  return (
    <section className={styles.container}>
      <h5>Trailers</h5>
      <div className={styles.trailersContainer}>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
      </div>
    </section>
  );
}
