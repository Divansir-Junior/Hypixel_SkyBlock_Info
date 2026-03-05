import api from "./api";

export async function searchHypixelPlayer(uuid: string) {
  const { data } = await api.get("/skyblock/profiles", {
    params: {
      uuid,
      key: import.meta.env.VITE_HYPIXEL_API_KEY,
    },
  });
  return data;
}
