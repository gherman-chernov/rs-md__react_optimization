import { apiClient, getPaginatedItems } from "./api-client";
import type { Location } from "../model";

export async function getLocations(): Promise<Location[]> {

  const axiosResponse = await getPaginatedItems<Location>('location', 1, null);

  return axiosResponse.results;
}

export async function getLocation(id: number): Promise<Location | undefined> {
  const axiosResponse = await apiClient<Location>({
    method: "get",
    url: `/episode/${id}`,
  });

  return axiosResponse.data;
}