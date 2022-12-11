"use client";

import styles from "./navbar.module.scss";
import Container from "../container/index";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import GradientContainer from "../GradientContainer/GradientContainer";
import { FC } from "react";

const Navbar: FC = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={styles.nav}
  >
    <GradientContainer
      style="gradient-01 w-full absolute inset-0"
      direction={false}
      opacity={true}
      duration={1}
      delay={1}
    />
    <Container>
      <div className={styles.wrapper}>
        <button className={styles.search}>
          <img src="./search.svg" alt="search" />
        </button>
        <Link href="/" className={styles.logo}>
          METAVERSUS
        </Link>
        <button className={styles.burger}>
          <img src="./menu.svg" alt="menu" />
        </button>
      </div>
    </Container>
  </motion.nav>
);

export default Navbar;
