<script setup>
import { defineProps } from "vue";
import DocVue from "./src/nodes/Doc.vue";
import BlockQuoteVue from "./src/nodes/BlockQuote.vue";
import BulletListVue from "./src/nodes/BulletList.vue";
import CodeBlockVue from "./src/nodes/CodeBlock.vue";
import HardBreakVue from "./src/nodes/HardBreak.vue";
import HeadingVue from "./src/nodes/Heading.vue";
import IFrameVue from "./src/nodes/IFrame.vue";
import ListItemVue from "./src/nodes/ListItem.vue";
import OrderedListVue from "./src/nodes/OrderedList.vue";
import ParagraphVue from "./src/nodes/Paragraph.vue";
import TableVue from "./src/nodes/Table.vue";
import TableCellVue from "./src/nodes/TableCell.vue";
import TableHeaderVue from "./src/nodes/TableHeader.vue";
import TableRowVue from "./src/nodes/TableRow.vue";
import TextVue from "./src/nodes/Text.vue";

const props = defineProps({
  node: Object,
  blockMap: Map,
});

const DEFAULT_BLOCK_MAP = {
  doc: DocVue,
  hardBreak: HardBreakVue,
  paragraph: ParagraphVue,
  codeBlock: CodeBlockVue,
  blockquote: BlockQuoteVue,
  bulletList: BulletListVue,
  orderedList: OrderedListVue,
  listItem: ListItemVue,
  heading: HeadingVue,
  iframe: IFrameVue,
  table: TableVue,
  tableRow: TableRowVue,
  tableHeader: TableHeaderVue,
  tableCell: TableCellVue,
  text: TextVue,
  // documentLink: DocumentLink,
};

const BLOCKS = { ...DEFAULT_BLOCK_MAP, ...props?.blockMap };

const getComponent = (type) => {
  return BLOCKS[type];
};
</script>

<template>
  <template v-if="node.content">
    <component
      v-for="(child, index) in node.content"
      :key="`node-${child.type}-${index}`"
      :is="getComponent(child.type)"
      :node="child"
    >
      <RichtextRenderer v-if="child.content" :node="child" />
    </component>
  </template>
  <slot />
</template>