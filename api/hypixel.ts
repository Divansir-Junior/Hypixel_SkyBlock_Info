import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { uuid } = req.query;
  if (!uuid) return res.status(400).json({ error: "UUID is required" });
  const response = await fetch(
    `https://api.hypixel.net/v2/skyblock/profiles?uuid=${uuid}`,
    { headers: { "API-Key": process.env.HYPIXEL_API_KEY! } },
  );
  const data = await response.json();
  return res.status(response.status).json(data);
}
