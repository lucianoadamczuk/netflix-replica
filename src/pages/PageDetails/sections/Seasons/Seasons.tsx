import styles from "./Seasons.module.css";

// TODO
// add props
// add images

export default function Seasons() {
  return (
    <section className={styles.container}>
      <h5>Seasons</h5>
      <div className={styles.seasonsContainer}>
        <article className={styles.seasonCard}>
          <div className={styles.image}></div>
          <h6>Season Name</h6>
        </article>
      </div>
    </section>
  );
}
