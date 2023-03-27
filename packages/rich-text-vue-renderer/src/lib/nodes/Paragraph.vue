<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "Paragraph",
  props: {
    node: { attrs: Object },
    connections: Array,
  },
  methods: {
    attrsToStyle,
  },
};
</script>

<template>
  <p :style="node?.attrs ? attrsToStyle(node.attrs) : undefined">
    <slot />
  </p>
</template>

