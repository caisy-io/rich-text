<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "Text",
  props: {
    node: Object,
  },
  methods: {
    attrsToStyle,
  },
};
</script>

<template>
  <template v-if="node.marks && node.marks[0]">
    <strong v-if="node.marks[0].type === 'bold'">
      <Text :node="{ ...node, marks: node.marks.slice().shift() }" />
    </strong>

    <em v-else-if="node.marks[0].type === 'italic'">
      <Text :node="{ ...node, marks: node.marks.slice().shift() }" />
    </em>

    <s v-else-if="node.marks[0].type === 'strike'">
      <Text :node="{ ...node, marks: node.marks.slice().shift() }" />
    </s>

    <code v-else-if="node.marks[0].type === 'code'">
      <Text :node="{ ...node, marks: node.marks.slice().shift() }" />
    </code>

    <a
      v-else-if="node.marks[0].type === 'link'"
      :href="node.marks[0].attrs?.href"
      :target="node.marks[0].attrs?.target"
    >
      <Text :node="{ ...node, marks: node.marks.slice(1) }" />
    </a>
  </template>

  <template v-else>{{ node.text }}</template>
</template>


