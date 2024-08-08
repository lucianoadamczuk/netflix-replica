import { CarouselHeader, SlideHeader } from "./components";
import styles from "./PageMedia.module.css";
export default function PageMedia() {
  return (
    <>
      <header className={styles.header}>
        <CarouselHeader />
        <SlideHeader />
      </header>
      <main className={styles.main}></main>
    </>
  );
}
