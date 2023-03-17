<script setup>
import { defineProps } from "vue";
import BlockQuoteVue from "./nodes/BlockQuote.vue";
import BulletListVue from "./nodes/BulletList.vue";
import CodeBlockVue from "./nodes/CodeBlock.vue";
import DocVue from "./nodes/Doc.vue";
import HardBreakVue from "./nodes/HardBreak.vue";
import HeadingVue from "./nodes/Heading.vue";
import IFrameVue from "./nodes/IFrame.vue";
import ListItemVue from "./nodes/ListItem.vue";
import OrderedListVue from "./nodes/OrderedList.vue";
import ParagraphVue from "./nodes/Paragraph.vue";
import TableVue from "./nodes/Table.vue";
import TableCellVue from "./nodes/TableCell.vue";
import TableHeaderVue from "./nodes/TableHeader.vue";
import TableRowVue from "./nodes/TableRow.vue";
import TextVue from "./nodes/Text.vue";

const props = defineProps({
  node: Object,
  connections: Array,
  blockMap: [Map , Object],
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
      :connections="connections"
    >
      <RichTextRenderer v-if="child.content" :node="child" :connections="connections" />
    </component>
  </template>
  <slot />
</template>
