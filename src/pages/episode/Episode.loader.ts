import type { Params } from "react-router";
import { getEpisode } from "../../api/episode";
import type { Episode } from "../../model";

export const episodeLoader = async function episodeLoader({params}: {params: Params}): Promise<Episode | undefined> {
  const id = params.id;

  if (!id) throw new Response('Не найдено', {status: 404});

  return await getEpisode(+id);
}