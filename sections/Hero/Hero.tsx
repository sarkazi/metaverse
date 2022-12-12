"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { DescriptionText } from "../../components/customTexts/CustomTexts";
import styles from "./hero.module.scss";
import { textVariant } from "../../utils/motion";
import { FC } from "react";

interface HeroProps {
  title?: string;
}

const Hero: FC<HeroProps> = ({ title }) => (
  <section className={styles.main}>
    <div className={styles.wrapper}>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className={styles.titleBlock}
      >
        <h1 className={styles.title}>metaverse</h1>
        <div className={styles.titleBottomBlock}>
          <h1 className={clsx(styles.title, styles.test)}>ma</h1>
          <div className={styles.d}></div>
          <h1 className={styles.title}>ness</h1>
        </div>
        <DescriptionText absolute={true} text="Home" />
      </motion.div>
      <div className={styles.cover}>
        <motion.img src="/cover.png" alt="" />
      </div>
    </div>
  </section>
);

export default Hero;
