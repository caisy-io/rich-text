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

export const RichTextRenderer = component$<IRenderer>(({ json }) => {
  if (json?.type !== "doc") {
    /* eslint-disable no-console */
    console.error("rich text json object must contain type:'doc'");
    return <></>;
  }

  return json?.content?.map((element: any) => {
    switch (element.type) {
      case "paragraph":
        return (
          <Paragraph attrs={element?.attrs}>
            <Text nodesArr={element?.content} />
          </Paragraph>
        );
      case "heading":
        return <Heading nodesArr={element.content} attrs={element.attrs} />;
      case "orderedList":
        return <OrderedList node={element} />;
      case "bulletList":
        return <BulletList node={element} />;
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
        /* eslint-disable no-console */
        console.error(`Unknown Type: ${element.type}`);
        return <></>;
    }
  });
});
