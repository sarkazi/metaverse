"use client";

import Container from "../../components/container";
import styles from "./whatsNew.module.scss";
import { DescriptionText } from "../../components/customTexts/CustomTexts";
import { TitleText } from "../../components/customTexts/CustomTexts";
import ImgWrapper from "../../components/ImgWrapper/imgWrapper";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import { FC } from "react";
import { IWhatsNewData } from "../../typings";

interface WhatsNewProps {
  whatsNew: IWhatsNewData[];
}

const WhatsNew: FC<WhatsNewProps> = ({ whatsNew }) => (
  <section className={styles.main}>
    <GradientContainer
      style="gradient-04 z-0 absolute w-full right-px"
      direction={false}
      opacity={true}
    />
    <GradientContainer style="gradient-02" direction={false} opacity={true} />
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.contentBlock}>
          <DescriptionText
            style={{ marginBottom: "10px" }}
            absolute={false}
            text="Whats New?"
          />
          <TitleText
            style={{ marginBottom: "48px" }}
            title="What's new about Metaversus?"
          />
          <ul className={styles.list}>
            {whatsNew?.map((el, index) => (
              <NewFeatures key={el.title} data={el} />
            ))}
          </ul>
        </div>
        <div className={styles.imgBlock}>
          <ImgWrapper directionRotate="right" planet="/planet2/planet.png" />
        </div>
      </div>
    </Container>
  </section>
);

export default WhatsNew;
