<script>
import { defineComponent } from "vue";
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

export default defineComponent({
  name: "RichTextRenderer",
  props: {
    node: Object,
    connections: Array,
    blockMap: {
      type: [Map, Object],
    },
  },
  computed: {
    BLOCKS() {
      return { ...DEFAULT_BLOCK_MAP, ...this.blockMap };
    },
  },
  methods: {
    getComponent(type) {
      return this.BLOCKS[type];
    },
  },
});
</script>

<template>
  <template v-if="node.content">
    <component
      v-for="(child, index) in node.content"
      :key="`node-${child.type}-${index}`"
      :node="child"
      v-bind="{ connections: connections }"
      :is="getComponent(child.type)"
    >
      <RichTextRenderer
        v-if="child.content"
        :node="child"
        :connections="connections"
      />
    </component>
  </template>
  <slot />
</template>
