import { component$ } from "@builder.io/qwik";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";

export default component$<{ cell: any; cellType: string }>(
  ({ cell, cellType }) => {
    const Cell = cellType === "tableHeader" ? ("th" as any) : ("td" as any);

    return (
      <Cell {...cell.attrs}>
        {cell.content.map((cellContent: any, contentKey: number) =>
          cellContent.type === "paragraph" ? (
            <Paragraph key={contentKey} attrs={cellContent.attrs}>
              <Text nodesArr={cellContent.content} />
            </Paragraph>
          ) : (
            <Heading
              key={contentKey}
              attrs={cellContent.attrs}
              nodesArr={cellContent.content}
            />
          )
        )}
      </Cell>
    );
  }
);
