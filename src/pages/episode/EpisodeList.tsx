import { useLoaderData, useNavigate } from "react-router";
import { ObjectList } from "../../component/object-list/ObjectList";
import { episodeDisplayableAttributes, type Episode } from "../../model";

export function EpisodeList() {
  const data = useLoaderData<Episode[]>();
  const navigate = useNavigate();

  return (
    <>
      <ObjectList
        data={data}
        caption="Episode List"
        loadingCaption="Loading episodes..."
        attributeList={episodeDisplayableAttributes}
        rowClickHandler={(episode: Episode) => navigate(`/episodes/${episode.id}`)}
      />
    </>)
}