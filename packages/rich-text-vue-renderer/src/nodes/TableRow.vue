<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "TableRow",
  props: {
    node: { attrs: Object },
  },
  methods: {
    attrsToStyle,
  },
};
</script>

<template>
  <tr :style="attrsToStyle(node.attrs)">
    <slot />
  </tr>
</template>

