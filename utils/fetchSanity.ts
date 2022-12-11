export const fetchSanity = async (reqAPI: string) => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${reqAPI}`
  ).then((res) => res.json());

  return data;
};
