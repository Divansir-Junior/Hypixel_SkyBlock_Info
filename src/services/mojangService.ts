import axios from "axios";

export async function getUUID(username: string) {
  const { data } = await axios.get(
    `https://corsproxy.io/?https://api.mojang.com/users/profiles/minecraft/${username}`,
  );
  return data.id;
}
