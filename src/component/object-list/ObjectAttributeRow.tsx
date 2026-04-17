

import type { Entity } from "../../model";
import { useId } from "react";

export function ObjectAttributeRow<T extends Entity>({
  object,
  attributeList,
  rowClickHandler,
}: {
  object: T;
  attributeList: string[];
  rowClickHandler: (object: T) => void;
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

  return (
    <tr key={`${id}-${object.id}`} onClick={() => rowClickHandler(object)}>
      {tds}
    </tr>
  );
}
