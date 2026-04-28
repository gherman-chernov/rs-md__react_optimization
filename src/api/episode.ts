import type { Episode } from '../model';
import { getPaginatedItems, apiClient } from './api-client';


export async function getEpisodes(): Promise<Episode[]> {

  const axiosResponse = await getPaginatedItems<Episode>('episode', 1, null);

  return axiosResponse.results;
}

export async function getEpisode(id: number): Promise<Episode | undefined> {
  const axiosResponse = await apiClient<Episode>({
    method: "get",
    url: `/episode/${id}`,
  });

  return axiosResponse.data;
}