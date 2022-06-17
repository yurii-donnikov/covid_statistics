import styles from "./Container.module.scss";
import { IContainer } from "../../interfaces/interfaces";

function Container({ children }: IContainer) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
