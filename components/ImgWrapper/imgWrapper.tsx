import React, { FC } from "react";
import styles from "./imgWrapper.module.scss";
import { motion } from "framer-motion";
import { planetVariants } from "../../utils/motion";

interface ImgWrapperProps {
  planet: string;
  directionRotate: "left" | "right";
}

const ImgWrapper: FC<ImgWrapperProps> = ({ planet, directionRotate }) => {
  return (
    <div className={styles.imgWrapper}>
      <img src="/planet1/wrapper.png" alt="planet-wrapper" />
      <motion.div className={styles.imgPlanetBlock}>
        <motion.img
          variants={planetVariants(directionRotate)}
          initial="hidden"
          whileInView="show"
          className={styles.imgPlanet}
          src={planet}
          alt="planet"
        />
      </motion.div>
    </div>
  );
};

export default ImgWrapper;
