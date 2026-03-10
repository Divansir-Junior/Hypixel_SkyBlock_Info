import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: "Username is required" });

  const response = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${username}`,
  );
  const data = await response.json();
  return res.status(response.status).json(data);
}
