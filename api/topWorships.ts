import { NowRequest, NowResponse } from "@vercel/node";
import { getMeritList } from "../utils/temple";

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  try {
    const data = await getMeritList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "internal server error" });
  }
};
