import { useLoaderData, useNavigate } from "react-router";
import { ObjectList } from "../../component/object-list";
import { episodeDisplayableAttributes, type Episode } from "../../model";
import { useState, useCallback } from "react";
import { usePaginatedItems } from "../../hook/usePaginatedItems";
import type { TableProps } from "antd";

const columns: TableProps<Episode>["columns"] = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Air Date',
    dataIndex: 'air_date',
    key: 'air_date'
  }, {
    title: 'Episode',
    dataIndex: 'episode',
    key: 'episode'
  }];

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
    if (loading) return
    setPageNumber((prev) => {
      return error ? prev : prev + 1;
    });
  }, [setPageNumber, error, loading]);

  return (
    <>
      { <ObjectList
        columns={columns}
        data={items}
        loading={loading}
        error={error}
        caption="Episode List"
        loadingCaption="Loading episodes..."
        attributeList={episodeDisplayableAttributes}
        rowClickHandler={(episode: Episode) =>
          navigate(`/episodes/${episode.id}`)
        }
        newPageHandler={newPageHandler}
      /> }
    </>
  );
}
