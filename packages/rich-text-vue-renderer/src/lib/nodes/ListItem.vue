<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "ListItem",
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
  <li :style="attrsToStyle(node.attrs)">
    <slot />
  </li>
</template>

