"use client";

import { FC } from "react";
import Container from "../../components/container";
import {
  DescriptionText,
  TitleText,
} from "../../components/customTexts/CustomTexts";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import InsightCard from "../../components/InsightCard/InsightCard";
import { IInsightData } from "../../typings";
import styles from "./insights.module.scss";

interface InsightsProps {
  insight: IInsightData[];
}

const Insights: FC<InsightsProps> = ({ insight }) => {
  return (
    <section className={styles.main}>
      <GradientContainer
        style="gradient-02 absolute"
        direction={true}
        opacity={false}
      />
      <GradientContainer
        style="gradient-04 absolute z-o"
        direction={false}
        opacity={true}
      />
      <Container>
        <div className={styles.insightContainer}>
          <DescriptionText style={{ alignSelf: "center" }} text="Insight" />
          <TitleText
            style={{
              alignSelf: "center",
              marginBottom: "50px",
              textAlign: "center",
            }}
            title="Insight about metaverse"
          />
          <ul className={styles.list}>
            {insight?.map((el, index) => (
              <InsightCard index={index} key={el.title} data={el} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Insights;
