import { useEffect, useId, useRef, type RefObject } from "react";

import type { Entity } from "../../model";
import { Spin, Table, Typography, type TableProps } from "antd";

export function ObjectList<T extends Entity>({
  data,
  caption,
  loadingCaption,
  columns,
  loading,
  error,
  rowClickHandler,
  newPageHandler,
}: {
  data: T[];
  caption: string;
  loadingCaption: string;
  attributeList: string[];
  columns: TableProps<T>["columns"];
  loading?: boolean;
  error?: boolean;
  rowClickHandler: (datum: T) => void;
  newPageHandler?: () => void;
}) {
  const id = useId();
  const observer = useRef<IntersectionObserver>(null);
  const lastNodeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (!loading && entries[0].isIntersecting) {
        if (newPageHandler) {
          newPageHandler();
        }
      }
    });

    if (lastNodeRef.current) {
      observer.current.observe(lastNodeRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  });

  return (
    <>
      <div>
        <Table<T>
          caption={caption}
          dataSource={data}
          columns={columns}
          rowKey={(datum) => `${id}-${datum.id}`}
          pagination={false}
          loading={{
            spinning: loading,
            indicator: <Spin description={loadingCaption} size="large"></Spin>,
            fullscreen: false,
          }}
          onRow={(datum: T, index: number | undefined) => {
            const props: {
              onClick: () => void;
              ref?: RefObject<HTMLElement | null>;
            } = {
              onClick: () => rowClickHandler(datum),
            };
            if (index === data.length - 1) {
              props.ref = lastNodeRef;
            }
            return props;
          }}
        />
        {error && (
          <div
            style={{
              textAlign: "center",
              padding: "12px 0",
              background: "#fafafa",
              borderTop: "1px solid #f0f0f0",
            }}
          >
            <Typography.Text type="danger">Error occured</Typography.Text>
          </div>
        )}
      </div>
    </>
  );
}
