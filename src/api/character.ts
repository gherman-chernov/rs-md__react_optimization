import type { Character } from "../model";
import { apiClient, getPaginatedItems } from "./api-client";


// enum CharacterFieldEnum { // erasable syntax only
//   id = 'id',
//   name = 'name',
//   status = 'status',
//   species = 'species',
//   type = 'type',
//   gender = 'gender',
// }

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
