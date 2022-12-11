"use client";

import Container from "../../components/container";
import {
  DescriptionText,
  TitleText,
} from "../../components/customTexts/CustomTexts";
import styles from "./planetContent.module.scss";
import StartSteps from "../../components/startSteps/StartSteps";
import { startingFeatures } from "../../constants";
import ImgWrapper from "../../components/ImgWrapper/imgWrapper";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import { FC } from "react";

const PlanetContent: FC = () => {
  return (
    <section className={styles.main}>
      <GradientContainer
        style="gradient-04 absolute inset-0 w-[50%]"
        direction={false}
        opacity={true}
      />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.imgBlock}>
            <ImgWrapper directionRotate="left" planet="/planet1/planet.png" />
          </div>
          <div className={styles.contentBlock}>
            <DescriptionText
              style={{ marginBottom: "10px" }}
              absolute={false}
              text="How Metaverus Works"
            />
            <TitleText
              style={{ marginBottom: "30px" }}
              title="Get started with just a few clicks"
            />
            <ul className={styles.list}>
              {startingFeatures.map((el, index) => (
                <StartSteps key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlanetContent;
