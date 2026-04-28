import type { Character } from "../model";
import { getPaginatedItems, apiClient } from "./api-client";

export async function getCharacters(): Promise<Character[]> {

  const axiosResponse = await getPaginatedItems<Character>('character', 1, null);

  return axiosResponse.results;
}

export async function getCharacter(id: number): Promise<Character | undefined> {
  const axiosResponse = await apiClient<Character>({
    method: "get",
    url: `/character/${id}`,
  });

  return axiosResponse.data;
}
