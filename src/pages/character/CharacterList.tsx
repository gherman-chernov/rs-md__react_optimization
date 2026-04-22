import { useLoaderData, useNavigate } from "react-router";
import { characterDisplayableAttributes, type Character } from "../../model";
import { ObjectList } from "../../component/object-list/ObjectList";
import { useCallback, useState } from "react";
import { usePaginatedItems } from "../../hook/usePaginatedItems";

export function CharacterList() {
  const data = useLoaderData<Character[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const {loading, error, items} = usePaginatedItems<Character>("/character", pageNumber, data);
  const newPageHandler = useCallback(() => {
    setPageNumber(prev => {
      return error ? prev : prev + 1
  });
  }, [setPageNumber, error]);

  return (
    <>
      <ObjectList
        data={items}
        loading={loading && pageNumber > 1}
        error={error}
        caption="Character List"
        loadingCaption="Loading characters..."
        attributeList={characterDisplayableAttributes}
        rowClickHandler={(character: Character) => navigate(`/characters/${character.id}`)}
        newPageHandler={newPageHandler}
      />
    </>
  );
}
