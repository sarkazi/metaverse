"use client";

import Container from "../../components/container";
import styles from "./feedback.module.scss";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import { FC } from "react";

const Feedback: FC = () => (
  <section className={styles.main}>
    <GradientContainer
      style="feedback-gradient"
      direction={false}
      opacity={true}
    />
    <Container>
      <div className={styles.items}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className={styles.messageItem}
        >
          <div className={styles.avatar}>
            <img src="/people-02.png" alt="" />
          </div>
          <h3>Samantha </h3>
          <span>Founder Metaverus</span>
          <p>
            With the development of technology, metaverse is very useful for
            work, or can be called web 3.0. by using metaverse you can use it as
            anything
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className={styles.imgItem}
        >
          <motion.img src="/planet-01.png" alt="" />
        </motion.div>
      </div>
    </Container>
  </section>
);

export default Feedback;
