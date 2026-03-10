import axios from "axios";

export async function searchHypixelPlayer(uuid: string) {
  const { data } = await axios.get(
    `https://api.hypixel.net/v2/skyblock/profiles?uuid=${uuid}`,
    { headers: { "API-Key": import.meta.env.VITE_HYPIXEL_API_KEY } },
  );
  return data;
}
