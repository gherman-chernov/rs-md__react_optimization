import { useLoaderData, useNavigate } from "react-router";
import { ObjectList } from "../../component/object-list/ObjectList";
import { episodeDisplayableAttributes, type Episode } from "../../model";
import { useState, useCallback } from "react";
import { usePaginatedItems } from "../../hook/usePaginatedItems";

export function EpisodeList() {
  const data = useLoaderData<Episode[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const { loading, error, items } = usePaginatedItems<Episode>(
    "/episode",
    pageNumber,
    data,
  );
  const newPageHandler = useCallback(() => {
    setPageNumber((prev) => {
      return error ? prev : prev + 1;
    });
  }, [setPageNumber, error]);

  return (
    <>
      <ObjectList
        data={items}
        loading={loading && pageNumber > 1}
        error={error}
        caption="Episode List"
        loadingCaption="Loading episodes..."
        attributeList={episodeDisplayableAttributes}
        rowClickHandler={(episode: Episode) =>
          navigate(`/episodes/${episode.id}`)
        }
        newPageHandler={newPageHandler}
      />
    </>
  );
}
