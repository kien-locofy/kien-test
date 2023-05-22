import { FunctionComponent } from "react";
import styles from "./Screen1.module.css";
const Screen1: FunctionComponent = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.helloThere}>Hello there</div>
      </div>
      <button className={styles.helloWrapper}>
        <div className={styles.hello}>Hello</div>
      </button>
    </div>
  );
};

export default Screen1;
