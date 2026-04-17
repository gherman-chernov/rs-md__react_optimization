import type { Params } from "react-router";
import type { Location } from "../../model";
import { getLocation } from "../../api/location";

export const locationLoader = async function locationLoader({params}: {params: Params}): Promise<Location | undefined> {
  const id = params.id;

  if (!id) throw new Response('Не найдено', {status: 404});

  return await getLocation(+id);
}