import { ContainerCarouselMedia } from "../../containers";
import ContainerCarouselHeader from "../../containers/ContainerCarouselHeader";
import styles from "./PageSeries.module.css";

export default function PageSeries() {
  return (
    <>
      <header className={styles.header}>
        <ContainerCarouselHeader display={[]} />
      </header>

      <main className={styles.main}>
        <ContainerCarouselMedia display={[]} />
      </main>
    </>
  );
}
