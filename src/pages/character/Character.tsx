import { useLoaderData } from "react-router";
import { type Character, characterDisplayableAttributes } from "../../model";
import { ObjectCard } from "../../component/object-card/ObjectCard";

export function Character() {
  const data = useLoaderData<Character>();

  return (
    <ObjectCard data={data} attributes={characterDisplayableAttributes}/>
  );
}
