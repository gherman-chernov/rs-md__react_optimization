import { getEpisodes } from "../../api/episode"

export const episodeListLoader = async function episodeListLoader() {
  const response = await getEpisodes();

  return response;
} 