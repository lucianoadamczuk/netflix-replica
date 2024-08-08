import { VIEWPORT } from "../../constants";
import styles from "./SlideMedia.module.css";

// TODO
// add props
// replace alt
// replate title

export default function SlideMedia() {
  return (
    <div className={styles.slide}>
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
          media={`(min-width: ${VIEWPORT.S})`}
          srcSet="https://swiperjs.com/demos/images/nature-2.jpg"
        />
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt={`A poster of TITLE`}
          className={styles.image}
        />
      </picture>

      <h6 className={styles.title}>Title</h6>
    </div>
  );
}
