import { useLoaderData, useNavigate } from "react-router";
import { ObjectList } from "../../component/object-list/ObjectList";
import { locationDisplayableAttributes, type Location } from "../../model";
import { useState, useCallback } from "react";
import { usePaginatedItems } from "../../hook/usePaginatedItems";

export function LocationList()  {
  const data = useLoaderData<Location[]>();
  const [pageNumber, setPageNumber] = useState(1);
    const navigate = useNavigate();
    const { loading, error, items } = usePaginatedItems<Location>(
      "/location",
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
        caption="Location List"
        loadingCaption="Loading locations..."
        attributeList={locationDisplayableAttributes}
        rowClickHandler={(location: Location) => navigate(`/locations/${location.id}`)}
        newPageHandler={newPageHandler}
      />
    </>)
}