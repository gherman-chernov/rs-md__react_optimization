import type { Params } from "react-router";
import { getCharacter} from "../../api/character";
import type { Character } from "../../model";

export const characterLoader = async function characterLoader({params}: {params: Params}): Promise<Character | undefined> {
  const id = params.id;

  if (!id) throw new Response('Не найдено', {status: 404});

  return await getCharacter(+id);
}