import { component$ } from "@builder.io/qwik";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";
import { IntrinsicHTMLElements } from "@builder.io/qwik/jsx-runtime";

export default component$<{ cell: any; cellType: string }>(
  ({ cell, cellType }) => {
    const Cell =
      cellType === "tableHeader"
        ? ("th" as keyof IntrinsicHTMLElements)
        : ("td" as keyof IntrinsicHTMLElements);

    return (
      <Cell {...cell.attrs} style={{ border: "1px solid black" }}>
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
