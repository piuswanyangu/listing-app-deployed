import { getPropertyById } from "@/lib/properties";
import type { PropertyProps } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps | ErrorResponse>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const property = id ? getPropertyById(id) : undefined;

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=60");
  return res.status(200).json(property);
}
