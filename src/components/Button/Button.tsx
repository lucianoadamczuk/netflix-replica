import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  secondary?: boolean;
  svg?: ReactNode;
  text: string;
}

export default function Button({ secondary, text, svg }: Props) {
  return (
    <button className={`${styles.button} ${secondary && styles.secondary}`}>
      {svg}
      <h6> {text} </h6>
    </button>
  );
}
