import { useEffect, useRef, useState } from "react";
import axios, { type Canceler } from "axios";
import type { Entity } from "../model";
import { getPaginatedItems } from "../api/api-client";

export function usePaginatedItems<T extends Entity>(
  url: string,
  pageNumber: number,
  preloadedData: T[] = [],
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState<T[]>(preloadedData);
  const [hasMore, setHasMore] = useState(true);
  const cancel = useRef<Canceler | undefined>(undefined);

  useEffect(() => {

    async function makeRequest() {
      if (pageNumber === 1 && preloadedData.length > 0 || loading == true || !hasMore) {
        return;
      }
      setLoading(true);

      const data = await getPaginatedItems<T>(
        url,
        pageNumber,
        new axios.CancelToken((c) => cancel.current = c),
      ).catch((err) => {
        if (axios.isCancel(err)) return;

        setError(true);
      });
      if (data == null) return;

      setLoading(false);
      setItems((prevState) => [...prevState, ...data.results]);
      setError(false);
      if (data.info.next) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    }

    makeRequest()

    return () => {
      setLoading(false);
      setHasMore(true);
      setError(false);
      if (cancel.current) {
        cancel.current();
      }
    };
  }, [pageNumber]);

  return { loading, error, items, hasMore };
}
