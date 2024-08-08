import styles from "./MainDetails.module.css";
export default function MainDetails() {
  return (
    <section className={styles.container}>
      {/* description */}
      <article>
        <h5>Description:</h5>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          magnam quas dolor, porro quisquam similique autem assumenda quaerat
          nulla veritatis quo amet incidunt vitae necessitatibus dolorum quasi
          ea debitis? Sapiente!
        </p>
      </article>

      <article className={styles.secondaryDetailsContainer}>
        <div>
          <h5>Genres:</h5>
          <ul>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
          </ul>
        </div>
        <div>
          <h5>Companies:</h5>
          <ul>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
          </ul>
        </div>
        <div>
          <h5>Languages:</h5>
          <ul>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
            <li className={styles.li}>action</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
