import { getProperties } from "@/lib/properties";
import type { PropertyProps } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[] | ErrorResponse>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=60");
  return res.status(200).json(getProperties());
}
