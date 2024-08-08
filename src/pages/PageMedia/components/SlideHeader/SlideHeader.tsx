import { VIEWPORT } from "../../../../constants";
import styles from "./SlideHeader.module.css";

// TODO:
// Add props
// Replace alt
// Replace title
// Replace text

export default function SlideHeader() {
  return (
    <article className={styles.slide}>
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
        <h3 className={styles.title}>Movie or serie title</h3>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptas id labore quaerat omnis quae itaque cupiditate maxime
          voluptatum facilis obcaecati voluptatibus, dicta maiores, laborum,
          alias tenetur dolorem ratione molestiae.
        </p>
      </div>
    </article>
  );
}
