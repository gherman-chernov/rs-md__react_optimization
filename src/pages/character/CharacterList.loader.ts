import { getCharacters } from "../../api/character"

export const characterListLoader = async function characterListLoader() {
  const response = await getCharacters();

  return response;
} 