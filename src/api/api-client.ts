import axios, { type AxiosRequestConfig, type CancelToken } from "axios";
import type { Entity } from "../model";
import type { ApiResponsePage } from "../model/api-response";

export const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export async function getPaginatedItems<T extends Entity>(
  url: string,
  pageNumber: number,
  cancelToken: CancelToken | null,
): Promise<ApiResponsePage<T>> {
  const request: AxiosRequestConfig = {
    method: "get",
    url: url,
    params: {
      page: pageNumber,
    },
  };

  if (cancelToken) request.cancelToken = cancelToken;

  const axiosResponse = await apiClient<ApiResponsePage<T>>(request);

  return axiosResponse.data;
}