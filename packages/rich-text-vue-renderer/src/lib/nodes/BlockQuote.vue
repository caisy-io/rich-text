<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "BlockQuote",
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
  <blockquote :style="attrsToStyle(node.attrs)">
    <slot />
  </blockquote>
</template>
