import { VIEWPORT } from "../../constants";
import Spinner from "../Spinner/Spinner";
import styles from "./SlideMedia.module.css";

// TODO
// add images URLs

interface Props {
  loading: boolean;
  title?: string;
}

/**
 * @description
 * A slide which shows a movie or serie.
 *
 * @param {Props} props - Props components.
 * @param {boolean} props.loading - If the param is true then the card is a Spinner otherwise it shows the content.
 * @param {string} props.title - Name of the movie or serie
 * @returns
 */

export default function SlideMedia({ loading, title }: Props) {
  /* --------------------------- slide with spinner --------------------------- */
  if (loading) {
    return (
      <div className={styles.slide}>
        <Spinner />
      </div>
    );
  }

  /* ---------------------------------- slide --------------------------------- */
  if (!loading) {
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
            alt={`A poster of ${title} `}
            className={styles.image}
          />
        </picture>

        {/* title */}
        <h6 className={styles.title}> {title} </h6>
      </div>
    );
  }
}
