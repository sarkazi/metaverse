"use client";

import { CSSProperties, FC, ReactNode } from "react";
import styles from "./square.module.scss";

interface Square {
  children: ReactNode;
  style?: CSSProperties;
}

const Square: FC<Square> = ({ children, style }) => {
  return (
    <div style={style} className={styles.numberBlock}>
      {children}
    </div>
  );
};

export default Square;
