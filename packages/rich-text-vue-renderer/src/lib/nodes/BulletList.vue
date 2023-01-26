<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "BulletList",
  props: {
    node: { attrs: Object },
  },
  methods: {
    attrsToStyle,
  },
};
</script>

<template>
  <ul :style="attrsToStyle(node.attrs)">
    <slot />
  </ul>
</template>

