import { Await } from "react-router";
import { Suspense, useCallback, useId, useRef } from "react";

import "./object-list.css";
import { ObjectAttributeRow } from "./ObjectAttributeRow";
import type { Entity } from "../../model";

export function ObjectList<T extends Entity>({
  data,
  caption,
  loadingCaption,
  attributeList,
  loading,
  error,
  rowClickHandler,
  newPageHandler
}: {
  data: T[];
  caption: string;
  loadingCaption: string;
  attributeList: string[];
  loading?: boolean;
  error?: boolean;
  rowClickHandler: (character: T) => void;
  newPageHandler?: () => void;
}) {
  const id = useId();
  const observer = useRef<IntersectionObserver>(null);
  const lastNodeRef = useCallback((node: HTMLElement) => {
    console.log(loading, node)
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (newPageHandler) newPageHandler();
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [loading,newPageHandler])

  return (
    <>
      <div>{caption}</div>
      <Suspense fallback={<h3>{loadingCaption}</h3>}>
        <table>
          <thead>
            <tr>
              {attributeList.map((attribute) => (
                <th key={`${id}-${attribute}`} className={attribute}>
                  {attribute}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Await resolve={data}>
              {(data) =>
                data.map((c, i) => (
                  <ObjectAttributeRow
                    ref={i === data.length - 1 ? lastNodeRef : null}
                    key={`${id}-${c.id}`}
                    object={c}
                    attributeList={attributeList}
                    rowClickHandler={rowClickHandler}
                  />
                ))
              }
            </Await>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={attributeList.length}>
                {data.length === 0 && <div>No data</div>}
              </td>
            </tr>
            <tr>
              <td colSpan={attributeList.length}>
                {loading && <div>{loadingCaption}</div>}
              </td>
            </tr>
            <tr className="error">
              <td colSpan={attributeList.length}>
                {error && <div>Error raised during request</div>}
              </td>
            </tr>
          </tfoot>
        </table>
      </Suspense>
    </>
  );
}
