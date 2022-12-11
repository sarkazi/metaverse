import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../config/sanity-config";
import { IWhatsNewData } from "../../typings";

const query = groq`

*[_type == "whatsNew"]
`;

type Data = {
  data: IWhatsNewData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await sanityClient.fetch(query);

  res.status(200).json({ data });
}
