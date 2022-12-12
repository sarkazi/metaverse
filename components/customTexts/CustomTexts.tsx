"use client";
import styles from "./customTexts.module.scss";
import { motion } from "framer-motion";

import clsx from "clsx";
import { textVariant2, textContainer, fadeIn } from "../../utils/motion";
import { CSSProperties, FC } from "react";

interface TypingText {
  text: string;
  style: CSSProperties;
}

export const TypingText: FC<TypingText> = ({ text, style }) => {
  return (
    <motion.p
      variants={fadeIn("left", "tween", 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      style={style}
      className={styles.text}
    >
      {text}
    </motion.p>
  );
};

interface TitleText {
  title: string;
  style?: CSSProperties;
  center?: boolean;
}

export const TitleText: FC<TitleText> = ({ title, style, center }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    style={style}
    className={clsx(styles.title, center && styles.center)}
  >
    {title}
  </motion.h2>
);

interface DescriptionTextProps {
  text: string;
  absolute?: boolean;
  style?: CSSProperties;
}

export const DescriptionText: FC<DescriptionTextProps> = ({
  text,
  absolute,
  style,
}) => {
  return (
    <motion.h2
      variants={textContainer}
      style={style}
      className={clsx(styles.description, absolute && styles.absolute)}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          variants={fadeIn("left", "spring", index * 0.07, 0.1)}
          initial="hidden"
          whileInView="show"
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
