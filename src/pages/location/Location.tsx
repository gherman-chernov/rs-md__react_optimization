import { useLoaderData } from "react-router";
import { ObjectCard } from "../../component/object-card/ObjectCard";
import { locationDisplayableAttributes, type Location } from "../../model";

export function Location() {
   const data = useLoaderData<Location>();

  return (
    <ObjectCard data={data} attributes={locationDisplayableAttributes}/>
  );
}