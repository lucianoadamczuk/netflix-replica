import { Modal } from "../../../../components";

import { useState } from "react";
import styles from "./Seasons.module.css";

// TODO
// add props
// add images

export default function Seasons() {
  // Modal states
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className={styles.container}>
      <h5>Seasons</h5>

      <Modal isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>modal</p>
      </Modal>
    </section>
  );
}
