"use-client";

import { FC } from "react";
import Square from "../Square/Square";
import styles from "./startSteps.module.scss";

interface StartSteps {
  text: string;
  id: number;
}

const StartSteps: FC<StartSteps> = ({ text, id }) => {
  return (
    <li className={styles.step}>
      <Square>
        <span>0{id}</span>
      </Square>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default StartSteps;
