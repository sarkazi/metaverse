"use client";
import Link from "next/link";
import Container from "../../components/container";
import { socials } from "../../constants";
import styles from "./footer.module.scss";

import { footerVariants } from "../../utils/motion";

import { motion } from "framer-motion";
import GradientContainer from "../../components/GradientContainer/GradientContainer";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={styles.footer}
    >
      <GradientContainer
        style="footer-gradient inset-0 width-[50%]"
        direction={true}
        opacity={false}
      />
      <Container>
        <div className={styles.footerContainer}>
          <Link className={styles.logo} href="/">
            metaversus
          </Link>
          <span className={styles.text}>
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </span>
          <ul className={styles.list}>
            {socials.map((el, index) => (
              <li key={el.name} className={styles.item}>
                <button>
                  <img src={el.url} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
