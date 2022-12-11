import {
  About,
  GetStarted,
  World,
  Feedback,
  Insights,
  WhatsNew,
  Explore,
  Hero,
  Navbar,
  Enter,
  Footer,
} from "../sections";
import styles from "../styles/page.module.scss";

import { GetStaticProps, NextPage } from "next";
import { IExploreData, IInsightData, IWhatsNewData } from "../typings";
import { fetchSanity } from "../utils/fetchSanity";

type PageProps = {
  explore: IExploreData[];
  insight: IInsightData[];
  whatsNew: IWhatsNewData[];
};

const Page: NextPage<PageProps> = ({ explore, insight, whatsNew }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Explore explore={explore} />
      <GetStarted />
      <WhatsNew whatsNew={whatsNew} />
      <World />
      <Insights insight={insight} />
      <Feedback />
      <Enter />
      <Footer />
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  try {
    const explore: IExploreData[] = await fetchSanity("getExplore");
    const insight: IInsightData[] = await fetchSanity("insight");
    const whatsNew: IWhatsNewData[] = await fetchSanity("whats-new");

    return {
      props: {
        explore,
        insight,
        whatsNew,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        explore: null,
        insight: null,
        whatsNew: null,
      },
    };
  }
};
