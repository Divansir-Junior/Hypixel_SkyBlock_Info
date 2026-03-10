import axios from "axios";

export async function getUUID(username: string) {
  const { data } = await axios.get(`/api/mojang?username=${username}`);
  return data.id;
}
