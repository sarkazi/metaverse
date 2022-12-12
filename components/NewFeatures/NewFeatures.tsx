"use client";

import { FC } from "react";
import { IWhatsNewData } from "../../typings";
import Square from "../Square/Square";
import styles from "./newFeatures.module.scss";
import Image from "next/image";
import { sanityClient } from "../../config/sanity-config";
import { useNextSanityImage } from "next-sanity-image";

interface NewFeaturesProps {
  data: IWhatsNewData;
}

const NewFeatures: FC<NewFeaturesProps> = ({ data }) => {
  const imageProps = useNextSanityImage(sanityClient, data.icon);

  return (
    <li className={styles.step}>
      <Square style={{ marginBottom: "24px", alignSelf: "flex-start" }}>
        <Image {...imageProps} alt="feature" />
      </Square>
      <h3 className={styles.title}>{data.title}</h3>
      <p className={styles.subtitle}>{data.subtitle}</p>
    </li>
  );
};

export default NewFeatures;
