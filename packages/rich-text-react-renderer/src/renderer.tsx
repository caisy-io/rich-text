import React, { FC } from "react";
import BlockQuote from "./nodes/BlockQuote";
import BulletList from "./nodes/BulletList";
import CodeBlock from "./nodes/CodeBlock";
import Doc from "./nodes/Doc";
import DocumentLink from "./nodes/DocumentLink";
import HardBreak from "./nodes/HardBreak";
import Heading from "./nodes/Heading";
import IFrame from "./nodes/IFrame";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Table from "./nodes/Table";
import TableCel from "./nodes/TableCell";
import TableHeader from "./nodes/TableHeader";
import TableRow from "./nodes/TableRow";
import Text from "./nodes/Text";

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

export const DEFAULT_BLOCK_MAP: Record<ElementType, FC<{ node: any }>> = {
  doc: Doc,
  hardBreak: HardBreak,
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

export const documentRenderer = (blockMap: Record<ElementType, FC<{ node: any }>>) => {
  const BLOCKS = { ...DEFAULT_BLOCK_MAP, ...blockMap };

  const renderNode = (currNode: any, currNodeIndex?: number, parentPath?: string) => {
    const Element = BLOCKS[currNode.type];

    if (!Element) {
      console.log("renderNode -> missing node type:", currNode.type);
      return null;
    }

    const path = (parentPath ? parentPath + "-" : "") + (typeof currNodeIndex === "number" ? currNodeIndex : "");

    return (
      <Element key={`node-${currNode.type}-${path}`} node={currNode} path={path}>
        {currNode.content?.map((node, index) => renderNode(node, index, path))}
      </Element>
    );
  };

  return renderNode;
};

export default documentRenderer(DEFAULT_BLOCK_MAP);
