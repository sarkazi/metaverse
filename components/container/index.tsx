"use client";

import { FC, ReactNode, CSSProperties } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Container: FC<ContainerProps> = ({ children, style }) => {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
