import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const config = {
  projectId: sanityProjectId || "zor846db",
  dataset: sanityDataset || "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-10-21",
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(config);
export const urlFor = (source: any) => builder.image(source);
