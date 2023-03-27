<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "OrderedList",
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
  <ol :style="attrsToStyle(node.attrs)">
    <slot />
  </ol>
</template>

