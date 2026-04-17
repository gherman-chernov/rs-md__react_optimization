import { useId } from "react";
import type { Entity } from "../../model";
import { ObjectAttribute } from "./ObjectAttribute";

export function ObjectCard<T extends Entity>({data, attributes}: {data: T, attributes: string[]}) {
  const id= useId();
  const objectAttributes = [];

  for (const v of attributes) {
    if (v === "image") continue;

    objectAttributes.push(<ObjectAttribute key={`${id}-${v}`} name={v} value={data[v]} />);
  }
  
  return (
    <section className="card">
      <header>{data.name}'s Card</header>
      <article>
        <div className="pic">
          { data.image && <img className="portrait" src={data.image.toString()} /> }
        </div>
        <div className="attr-container">{objectAttributes}</div>
      </article>
    </section>
  );
}
