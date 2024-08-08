import { Button, Spinner } from "../../../../components";
import { VIEWPORT } from "../../../../constants";
import { ButtonsLayout } from "../../../../layouts";
import styles from "./SlideHeader.module.css";

// TODO:
// Add props
// Replace alt
// Replace title
// Replace text

interface Props {
  loading: boolean;
  title?: string;
  description?: string;
}

export default function SlideHeader({ loading, title, description }: Props) {
  /* ----------------------------- if its loading ----------------------------- */
  if (loading) {
    return (
      <article className={styles.slide}>
        <Spinner />
      </article>
    );
  }

  /* ------------------------------ if its loaded ----------------------------- */
  if (!loading) {
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
            media={`(min-width: ${VIEWPORT.S})`}
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
          <h3 className={styles.title}> {title} </h3>
          <p className={styles.paragraph}>{description}</p>

          <ButtonsLayout>
            <Button text="Play" />
            <Button secondary text="More Information" />
          </ButtonsLayout>
        </div>
      </article>
    );
  }
}
