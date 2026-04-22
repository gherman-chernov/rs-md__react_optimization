import { useEffect, useState } from "react";
import axios, { type Canceler } from "axios";
import type { Entity } from "../model";
import { getPaginatedItems } from "../api/api-client";

export function usePaginatedItems<T extends Entity>(url: string, pageNumber: number, preloadedData: T[] = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState<T[]>(preloadedData);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    // Skip fetch for page 1 when we have preloaded data
    if (pageNumber === 1 && preloadedData.length > 0) {
      return;
    }
    if (!hasMore) {
      return;
    }

    let cancel: Canceler | undefined;
    let isMounted = true;

    getPaginatedItems<T>(
      url,
      pageNumber,
      new axios.CancelToken((c) => (cancel = c)),
    )
      .then((data) => {
        if (!isMounted) return;
        
        setItems((prevState) => [...prevState, ...data.results]);
        setError(false);
        if (data.info.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        if (axios.isCancel(err)) return;

        setError(true);
        console.error(err);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      if (cancel) {
        cancel();
      }
    };
  }, [url, pageNumber, preloadedData, hasMore]);

  return { loading, error, items, hasMore };
}
