import { useId } from "react";
import type { Entity } from "../../model";
import { ObjectAttribute } from "./ObjectAttribute";
import { Card, Space } from "antd";

export function ObjectCard<T extends Entity>({
  data,
  attributes,
}: {
  data: T;
  attributes: string[];
}) {
  const id = useId();
  const objectAttributes = [];

  for (const v of attributes) {
    if (v === "image") continue;

    objectAttributes.push(
      <ObjectAttribute key={`${id}-${v}`} name={v} value={data[v]} />,
    );
  }

  return (
    <>
      <Space vertical size={16}>
        <Card title={`${data.name}'s Card`} variant="borderless" cover={data.image && (
                <img className="portrait" src={data.image.toString()} />)}>
          <article>
            <div className="attr-container">{objectAttributes}</div>
          </article>
        </Card>
      </Space>
    </>
  );
}
