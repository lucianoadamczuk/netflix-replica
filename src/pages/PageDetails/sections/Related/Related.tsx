import { ContainerCarouselMedia } from "../../../../containers";
import styles from "./Related.module.css";

// TODO
// add props

export default function Related() {
  return (
    <section className={styles.container}>
      <h5>Related</h5>
      <ContainerCarouselMedia display={[]} />
    </section>
  );
}
