<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "CodeBlock",
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
  <pre :style="attrsToStyle(node.attrs)"><slot /></pre>
</template>

