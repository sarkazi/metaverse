import { groq } from "next-sanity";
import { sanityClient } from "../config/sanity-config";

export const fetchSanity = async (req: string) => {
  const query = groq`

   *[_type == "${req}"]
   `;

  const data = await sanityClient.fetch(query);
  return data;
};
