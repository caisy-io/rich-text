<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "TableHeader",
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
  <th :style="attrsToStyle(node.attrs)">
    <slot />
  </th>
</template>

