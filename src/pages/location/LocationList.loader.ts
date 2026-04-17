import { getLocations } from "../../api/location"

export const locationListLoader = async function locationListLoader() {
  const response = await getLocations();

  return response;
} 