"use client";
import Container from "../../components/container";
import { TitleText } from "../../components/customTexts/CustomTexts";
import styles from "./enter.module.scss";

import { motion } from "framer-motion";
import { FC } from "react";

const Enter: FC = () => {
  return (
    <div id="enter-metaverse" className={styles.main}>
      <Container
        style={{
          borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "50px 20px 80px 20px",
        }}
      >
        <div className={styles.enterContainer}>
          <TitleText center={true} title="Enter the Metaverse" />
          <motion.button
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            whileHover={{ scale: 1.04 }}
            className={styles.button}
          >
            <img src="/headset.svg" alt="" />
            <span>ENTER METAVERSE</span>
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default Enter;
