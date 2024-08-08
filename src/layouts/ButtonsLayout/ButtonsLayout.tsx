import { ReactNode } from "react";

import styles from "./ButtonsLayout.module.css";
interface Props {
  children: ReactNode;
}
export default function ButtonsLayout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
