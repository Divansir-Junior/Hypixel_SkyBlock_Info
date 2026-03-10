import axios from "axios";

export async function searchHypixelPlayer(uuid: string) {
  const { data } = await axios.get(`/api/hypixel?uuid=${uuid}`);
  return data;
}
