"use client";

import Container from "../../components/container";
import {
  DescriptionText,
  TitleText,
} from "../../components/customTexts/CustomTexts";

import styles from "./world.module.scss";

import { FC } from "react";

const World: FC = () => (
  <section className={styles.main}>
    <Container>
      <div className={styles.worldContainer}>
        <DescriptionText
          style={{ marginBottom: "15px" }}
          text="People on the World"
        />
        <TitleText
          style={{ textAlign: "center", marginBottom: "70px" }}
          title="Track friends around you and invite them to play together in the same world"
        />

        <div className={styles.imgBlock}>
          <img src="/map.png" alt="" />
        </div>
      </div>
    </Container>
  </section>
);

export default World;
