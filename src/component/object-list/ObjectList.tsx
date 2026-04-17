import { Await } from "react-router";
import { Suspense, useId } from "react";

import "./object-list.css";
import { ObjectAttributeRow } from "./ObjectAttributeRow";
import type { Entity } from "../../model";


export function ObjectList<T extends Entity>({
  data,
  caption,
  loadingCaption,
  attributeList,
  rowClickHandler,
}: {
  data: T[];
  caption: string;
  loadingCaption: string;
  attributeList: string[];
  rowClickHandler: (character: T) => void;
}) {
  const id = useId();

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
                data.map((c) => (
                  <ObjectAttributeRow
                    key={`${id}-${c.id}`}
                    object={c}
                    attributeList={attributeList}
                    rowClickHandler={rowClickHandler}
                  />
                ))
              }
            </Await>
          </tbody>
        </table>
      </Suspense>
    </>
  );
}
