import { Await, useLoaderData, useNavigate } from "react-router";
import { characterDisplayableAttributes, type Character } from "../../model";
import { ObjectList } from "../../component/object-list";
import { Suspense, useCallback, useState } from "react";
import { usePaginatedItems } from "../../hook/usePaginatedItems";
import type { TableProps } from "antd";

const characterColumns: TableProps<Character>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Species",
    dataIndex: "species",
    key: "species",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image: string) => <img src={image} alt={image} height="100px" />,
  },
];

export function CharacterList() {
  const data = useLoaderData<Character[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const { loading, error, items } = usePaginatedItems<Character>(
    "/character",
    pageNumber,
    data,
  );
  const newPageHandler = useCallback(() => {
    if (loading) return;
    setPageNumber((prev) => {
      return error ? prev : prev + 1;
    });
  }, [setPageNumber, error, loading]);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={items}>
        {(items) => 

      <ObjectList
        data={items}
        loading={loading}
        error={false}
        caption="Character List"
        loadingCaption="Loading characters..."
        attributeList={characterDisplayableAttributes}
        columns={characterColumns}
        rowClickHandler={(character: Character) =>
          navigate(`/characters/${character.id}`)
        }
        newPageHandler={newPageHandler}
      /> }
            </Await>
    </Suspense>
    </>
  );
}
