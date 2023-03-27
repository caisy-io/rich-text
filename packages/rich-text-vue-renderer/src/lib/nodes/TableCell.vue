<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "TableCell",
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
  <td :style="attrsToStyle(node.attrs)">
    <slot />
  </td>
</template>

