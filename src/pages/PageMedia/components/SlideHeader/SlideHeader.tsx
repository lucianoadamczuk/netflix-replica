import styles from "./SlideHeader.module.css";

// TODO:
// Replace the alt

export default function SlideHeader() {
  return (
    <article className={styles.slide}>
      <picture className={styles.image}>
        <source
          media="(min-width: )"
          srcSet="https://swiperjs.com/demos/images/nature-4.jpg"
        />
        <source
          media="(min-width: )"
          srcSet="https://swiperjs.com/demos/images/nature-3.jpg"
        />
        <source
          media="(min-width: )"
          srcSet="https://swiperjs.com/demos/images/nature-2.jpg"
        />
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt={`A poster of TITLE`}
          className={styles.image}
        />
      </picture>
      <h5 className={styles.title}>Movie or serie title</h5>
    </article>
  );
}
