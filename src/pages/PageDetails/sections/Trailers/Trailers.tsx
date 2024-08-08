import { useState } from "react";
import { Modal } from "../../../../components";
import styles from "./Trailers.module.css";

export default function Trailers() {
  // Modal states
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className={styles.container}>
      <h5>Trailers</h5>

      <div className={styles.trailersContainer}>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
        <article className={styles.trailer}></article>
      </div>

      <Modal isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>modal</p>
      </Modal>
    </section>
  );
}
