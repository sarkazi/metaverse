"use client";

import Container from "../../components/container";
import {
  DescriptionText,
  TypingText,
} from "../../components/customTexts/CustomTexts";
import styles from "./about.module.scss";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import Link from "next/link";
import { FC } from "react";

const About: FC = () => (
  <section className={styles.main}>
    <GradientContainer direction={true} opacity={false} style="gradient-02" />
    <GradientContainer
      direction={false}
      opacity={true}
      style="gradient-03 z-0"
    />
    <Container>
      <div className={styles.wrapper}>
        <DescriptionText
          style={{ marginBottom: "30px" }}
          absolute={false}
          text="About Metaverus"
        />
        <TypingText
          style={{ marginBottom: "30px" }}
          text="Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down"
        />
        <Link href="#enter-metaverse">
          <img src="/arrow-down.svg" alt="" />
        </Link>
      </div>
    </Container>
  </section>
);

export default About;
