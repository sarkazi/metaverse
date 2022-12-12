"use client";

import styles from "./insightCard.module.scss";
import { motion } from "framer-motion";
import { opacityVariant } from "../../utils/motion";
import { FC } from "react";
import { IInsightData } from "../../typings";
import { sanityClient } from "../../config/sanity-config";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

interface InsightCard {
  data: IInsightData;
  index: number;
}

const InsightCard: FC<InsightCard> = ({ data, index }) => {
  const imageProps = useNextSanityImage(sanityClient, data.icon);

  return (
    <motion.li
      variants={opacityVariant("tween", 0.6 * index, 0.6)}
      initial="hidden"
      whileInView="show"
      className={styles.card}
    >
      <div className={styles.imgBlock}>
        <Image {...imageProps} alt="galaxy" />
      </div>
      <div className={styles.textBlock}>
        <h3>{data.title}</h3>
        <p>{data.subtitle}</p>
      </div>
      <button className={styles.button}>
        <img src="/arrow.svg" alt="arrow-button" />
      </button>
    </motion.li>
  );
};

export default InsightCard;
