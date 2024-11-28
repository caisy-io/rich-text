import BlockQuote from "./components/node/BlockQuote";
import BulletList from "./components/node/BulletList";
import CodeBlock from "./components/node/CodeBlock";
import Doc from "./components/node/Doc";
import DocumentLink from "./components/node/DocumentLink";
import HardBreak from "./components/node/HardBreak";
import Heading from "./components/node/Heading";
import HorizontalRule from "./components/node/HorizontalRule";
import IFrame from "./components/node/IFrame";
import ListItem from "./components/node/ListItem";
import OrderedList from "./components/node/OrderedList";
import Paragraph from "./components/node/Paragraph";
import Table from "./components/node/Table";
import TableCel from "./components/node/TableCell";
import TableHeader from "./components/node/TableHeader";
import TableRow from "./components/node/TableRow";
import Text from "./components/node/Text";

export type ElementType =
  | "doc"
  | "hardBreak"
  | "paragraph"
  | "codeBlock"
  | "horizontalRule"
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

export const DEFAULT_BLOCK_MAP: any = {
  doc: Doc,
  hardBreak: HardBreak,
  horizontalRule: HorizontalRule,
  paragraph: Paragraph,
  codeBlock: CodeBlock,
  blockquote: BlockQuote,
  bulletList: BulletList,
  orderedList: OrderedList,
  listItem: ListItem,
  heading: Heading,
  iframe: IFrame,
  table: Table,
  tableRow: TableRow,
  tableHeader: TableHeader,
  tableCell: TableCel,
  text: Text,
  documentLink: DocumentLink,
};

export const documentRenderer = (blockMap: any) => {
  const BLOCKS = { ...DEFAULT_BLOCK_MAP, ...blockMap };

  const renderNode = (
    currNode: any,
    currNodeIndex?: number,
    parentPath?: string
  ) => {
    const Element = BLOCKS[currNode.type];

    if (!Element) {
      console.warn("renderNode -> missing node type:", currNode.type);
      return null;
    }

    const path =
      (parentPath ? parentPath + "-" : "") +
      (typeof currNodeIndex === "number" ? currNodeIndex : "");

    return (
      <Element
        key={`node-${currNode.type}-${path}`}
        node={currNode}
        path={path}
      >
        {currNode.content?.map((node: any, index: any) =>
          renderNode(node, index, path)
        )}
      </Element>
    );
  };

  return renderNode;
};

export default documentRenderer(DEFAULT_BLOCK_MAP);
