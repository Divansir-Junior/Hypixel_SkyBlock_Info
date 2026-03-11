import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { uuid } = req.query;
  console.log("UUID:", uuid);
  console.log("API KEY:", process.env.HYPIXEL_API_KEY);
  if (!uuid) return res.status(400).json({ error: "UUID is required" });
  const response = await fetch(
    `https://api.hypixel.net/v2/skyblock/profiles?uuid=${uuid}`,
    { headers: { "API-Key": process.env.HYPIXEL_API_KEY! } },
  );
  const data = await response.json();
  console.log("Hypixel response status:", response.status);
  return res.status(response.status).json(data);
}
