import { ReactNode } from "react";
import styles from "./Model.module.css";
import { CrossIcon } from "../../icons";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

/**
 * @description
 * A modal to show data which is displayed in front of the whole page.
 *
 * @param {Props} props - Component props
 * @param {boolean} props.isOpen - If true then the modal is open otherwise no.
 * @param {void} props.onClick - To set the isOpen value in false.
 * @param {ReactNode} props.children - Modal content.
 * @returns {ReactNode}
 */

export default function Modal({ isOpen, onClick, children }: Props): ReactNode {
  return (
    <section
      className={styles.container}
      style={isOpen ? { display: "flex" } : { display: "none" }}
    >
      <div className={styles.iconContainer} onClick={onClick}>
        <CrossIcon />
      </div>
      {children}
    </section>
  );
}
