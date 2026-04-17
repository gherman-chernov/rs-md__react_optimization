import { useLoaderData, useNavigate } from "react-router";
import { ObjectList } from "../../component/object-list/ObjectList";
import { locationDisplayableAttributes, type Location } from "../../model";

export function LocationList()  {
  const data = useLoaderData<Location[]>();
  const navigate = useNavigate();

  return (
    <>
      <ObjectList
        data={data}
        caption="Episode List"
        loadingCaption="Loading episodes..."
        attributeList={locationDisplayableAttributes}
        rowClickHandler={(location: Location) => navigate(`/locations/${location.id}`)}
      />
    </>)
}