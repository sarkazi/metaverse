"use client";
import styles from "./explore.module.scss";
import { motion } from "framer-motion";
import { opacityVariant } from "../../utils/motion";
import clsx from "clsx";

import { FC } from "react";
import Square from "../Square/Square";
import { urlFor } from "../../config/sanity-config";
import { IExploreData } from "../../typings";

interface ExploreCardProps {
  data: IExploreData;
  active: string;
  setActive: (id: string) => void;
  index: number;
}

const ExploreCard: FC<ExploreCardProps> = ({
  data,
  active,
  setActive,
  index,
}) => {
  const handleClick = () => {
    if (data._id === active) {
      setActive("");
    } else {
      setActive(data._id);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={opacityVariant("spring", index * 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className={clsx(styles.card, data._id === active && styles.activeCard)}
      style={{ backgroundImage: `url(${urlFor(data.icon)})` }}
    >
      {active !== data._id ? (
        <h3 className={clsx(styles.title, styles.titleRotate)}>{data.title}</h3>
      ) : (
        <motion.div
          variants={opacityVariant("tween", 0.3, 0.8)}
          initial="hidden"
          animate="show"
          className={styles.opacityBlock}
        >
          <Square style={{ alignSelf: "flex-start", marginBottom: "15px" }}>
            <img src="/headset.svg" alt="" />
          </Square>

          <span className={styles.span}>ENTER METAVERSE</span>
          <h3 className={clsx(styles.title, styles.titleNoRotate)}>
            {data.title}
          </h3>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
