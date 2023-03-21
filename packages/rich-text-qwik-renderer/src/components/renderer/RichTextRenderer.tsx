import { component$ } from "@builder.io/qwik";
import BlockQuote from "../node/block-quote/BlockQuote";
import CodeBlock from "../node/code-block/CodeBlock";
import Heading from "../node/heading/Heading";
import Iframe from "../node/iframe/Iframe";
import BulletList from "../node/list/BulletList";
import OrderedList from "../node/list/OrderedList";
import Paragraph from "../node/paragraph/Paragraph";
import Table from "../node/table/Table";
import Text from "../node/text/Text";

interface IRenderer {
  json?: any;
}

export type ElementType =
  | "doc"
  | "hardBreak"
  | "paragraph"
  | "codeBlock"
  | "blockquote"
  | "bulletList"
  | "orderedList"
  | "listItem"
  | "heading"
  | "iframe"
  | "table"
  | "tableHeader"
  | "tableRow"
  | "tableCell"
  | "documentLink"
  | "text";

// export const DEFAULT_BLOCK_MAP = {
//   paragraph: Paragraph,
//   heading: Heading,
//   text: Text,
// };

export const RichTextRenderer = component$<IRenderer>(({ json }) => {
  if (json?.type !== "doc") return <>json object must be of type:"doc"</>;

  // react renderer logic
  // for (const node of json.content) {
  //   console.log("elem", {
  //     elem: DEFAULT_BLOCK_MAP[node.type as keyof typeof DEFAULT_BLOCK_MAP],
  //   });
  // }

  return (
    <>
      {json?.content?.map((element: any, elementIndex: number) => {
        switch (element.type) {
          case "paragraph":
            return (
              <Paragraph key={`pc-${elementIndex}`} attrs={element?.attrs}>
                <Text nodesArr={element?.content} />
              </Paragraph>
            );
          case "heading":
            return (
              <Heading
                key={`pc-${elementIndex}`}
                level={element.attrs.level}
                nodesArr={element.content}
                attrs={element.attrs}
              />
            );
          case "orderedList":
            return <OrderedList node={element} key={`pc-${elementIndex}`} />;
          case "bulletList":
            return <BulletList node={element} key={`pc-${elementIndex}`} />;
          case "blockquote":
            return <BlockQuote node={element} />;
          case "codeBlock":
            return (
              <CodeBlock node={element}>
                <Text nodesArr={element.content} />
              </CodeBlock>
            );
          case "table":
            return <Table node={element} />;
          case "iframe":
            return <Iframe node={element} />;
          default:
            return <>Unknown TYPE</>;
        }
      })}
    </>
  );
});
