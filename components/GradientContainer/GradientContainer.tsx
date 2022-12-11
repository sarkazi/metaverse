"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { movingVariants } from "../../utils/motion";

interface GradientContainerProps {
  style: string;
  direction: boolean;
  opacity: boolean;
  type?: string;
  duration?: number;
  delay?: number;
}

const GradientContainer: FC<GradientContainerProps> = ({
  style,
  direction,
  opacity,
  type = "spring",
  duration = 5,
  delay = 1,
}) => {
  return (
    <motion.div
      variants={movingVariants(direction, opacity, type, duration, delay)}
      initial="hidden"
      whileInView="show"
      className={style}
    />
  );
};

export default GradientContainer;
