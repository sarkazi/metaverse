"use client";

import clsx from "clsx";

import { motion } from "framer-motion";

import Container from "../../components/container";
import { DescriptionText } from "../../components/customTexts/CustomTexts";
import styles from "./hero.module.scss";

//import style from '../../styles/globals.css'

import { textVariant } from "../../utils/motion";

import { dragConstraints } from "../../utils/motion";
import { FC } from "react";

interface HeroProps {
  title?: string;
}

const Hero: FC<HeroProps> = ({ title }) => (
  //metaverse

  <section className={styles.main}>
    <div className={styles.wrapper}>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        drag
        dragConstraints={dragConstraints}
        className={styles.titleBlock}
      >
        <h1 className={styles.title}>{process.env.NEXT_PUBLIC_TITLE}</h1>
        <div className={styles.titleBottomBlock}>
          <h1 className={clsx(styles.title, styles.test)}>ma</h1>
          <div className={styles.d}></div>
          <h1 className={styles.title}>ness</h1>
        </div>
        <DescriptionText absolute={true} text="Home" />
      </motion.div>
      <div className={styles.cover}>
        <motion.img
          drag
          dragConstraints={dragConstraints}
          src="/cover.png"
          alt=""
        />
      </div>
    </div>
  </section>
);

export default Hero;
