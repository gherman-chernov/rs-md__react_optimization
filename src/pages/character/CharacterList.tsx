import { useLoaderData, useNavigate } from "react-router";
import { characterDisplayableAttributes, type Character } from "../../model";
import { ObjectList } from "../../component/object-list/ObjectList";

export function CharacterList() {
  const data = useLoaderData<Character[]>();
  const navigate = useNavigate();

  return (
    <>
      <ObjectList
        data={data}
        caption="Character List"
        loadingCaption="Loading characters..."
        attributeList={characterDisplayableAttributes}
        rowClickHandler={(character: Character) => navigate(`/characters/${character.id}`)}
      />
    </>
  );
}
