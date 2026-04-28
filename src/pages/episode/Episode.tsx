import { useLoaderData } from "react-router";
import { ObjectCard } from "../../component/object-card/ObjectCard";
import { episodeDisplayableAttributes, type Episode } from "../../model";

export function Episode() {
  const data = useLoaderData<Episode>();

  return (
    <ObjectCard data={data} attributes={episodeDisplayableAttributes}/>
  );
}