import type { Entity } from "../../model";
import { useId, type RefCallback } from "react";

export function ObjectAttributeRow<T extends Entity>({
  object,
  attributeList,
  rowClickHandler,
  ref,
}: {
  object: T;
  attributeList: string[];
  rowClickHandler: (object: T) => void;
  ref: RefCallback<HTMLElement> | null;
}) {
  const id = useId();
  const tds = [];

  for (const key of attributeList) {
    if (key !== "image") {
      tds.push(<td key={`${id}-${key}`}>{object[key]}</td>);
    } else {
      tds.push(
        <td key={`${id}-${key}`}>
          <img className="portrait" src={object[key].toString()} />
        </td>,
      );
    }
  }

  return ref != null ? (
    <tr
      data-info="last"
      data-id={`${id}-${object.id}`}
      ref={ref}
      key={`${id}-${object.id}`}
      onClick={() => rowClickHandler(object)}
    >
      {tds}
    </tr>
  ) : (
    <tr key={`${id}-${object.id}`} onClick={() => rowClickHandler(object)}>
      {tds}
    </tr>
  );
}
