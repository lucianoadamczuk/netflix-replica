import { CarouselResponsive } from "../../components";
import { CarouselHeader } from "./components";
import styles from "./PageMedia.module.css";
export default function PageMedia() {
  return (
    <>
      <header className={styles.header}>
        <CarouselHeader />
      </header>
      <main className={styles.main}>
        <CarouselResponsive />
      </main>
    </>
  );
}
