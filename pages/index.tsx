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
import { GetServerSideProps, NextPage } from "next";
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

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  try {
    const insight = await fetchSanity("insight");
    const explore = await fetchSanity("explore");
    const whatsNew = await fetchSanity("whatsNew");

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
