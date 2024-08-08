import { VIEWPORT } from "../../../../constants";
import styles from "./Header.module.css";

// TODO
// add props
// replace title
// replace images
// replace content
// add styles for content

export default function Header() {
  return (
    <header className={styles.header}>
      {/* images */}
      <picture className={styles.image}>
        <source
          media={`(min-width: ${VIEWPORT.XL})`}
          srcSet="https://swiperjs.com/demos/images/nature-4.jpg"
        />
        <source
          media={`(min-width: ${VIEWPORT.L})`}
          srcSet="https://swiperjs.com/demos/images/nature-3.jpg"
        />
        <source
          media={`(min-width: ${VIEWPORT.SM})`}
          srcSet="https://swiperjs.com/demos/images/nature-2.jpg"
        />
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt={`A poster of TITLE`}
          className={styles.image}
        />
      </picture>

      {/* content */}
      <div className={styles.container}>
        <h3>Title of the movie or serie</h3>
        <div className={styles.details}>
          <p>cosas</p>
          <p>cosas</p>
          <p>cosas</p>
          <p>cosas</p>
        </div>
      </div>
    </header>
  );
}
