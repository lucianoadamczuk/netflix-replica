import { useContext } from "react";
import { ContainerCarouselMedia } from "../../containers";
import ContainerCarouselHeader from "../../containers/ContainerCarouselHeader";
import { ContextMovies } from "../../contexts";
import styles from "./PageMovies.module.css";

export default function PageMovies() {
  const context = useContext(ContextMovies);

  return (
    <>
      <header className={styles.header}>
        <ContainerCarouselHeader display={[]} />
      </header>

      <main className={styles.main}>
        <ContainerCarouselMedia display={context?.moviesByGenre} />
      </main>
    </>
  );
}
