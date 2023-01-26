<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "Table",
  props: {
    node: { attrs: Object },
  },
  methods: {
    attrsToStyle,
  },
};
</script>

<template>
  <table :style="attrsToStyle(node.attrs)">
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

