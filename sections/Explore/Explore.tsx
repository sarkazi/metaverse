"use client";

import ExploreCard from "../../components/explore/ExploreCard";
import styles from "./explore.module.scss";

import { FC, useState } from "react";
import { TitleText } from "../../components/customTexts/CustomTexts";
import Container from "../../components/container";
import { IExploreData } from "../../typings";

import Skeleton from "../../components/skeleton/Skeleton";

interface ExploreProps {
  explore: IExploreData[];
}

const Explore: FC<ExploreProps> = ({ explore }) => {
  const [active, setActive] = useState<string>("");

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.motionContainer}>
          <TitleText
            style={{ textAlign: "center", margin: "0 auto 60px" }}
            title="Choose the world you want to explore"
          />
          <div className={styles.cardWrapper}>
            {explore
              ? explore.map((el, index) => (
                  <ExploreCard
                    key={el._id}
                    data={el}
                    index={index}
                    active={active}
                    setActive={setActive}
                  />
                ))
              : Array.from({ length: 5 }).map((skeleton, index) => (
                  <Skeleton key={index} />
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Explore;
