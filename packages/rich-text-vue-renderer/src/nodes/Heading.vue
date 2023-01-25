<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

const TAGS = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const getTag = (level) => {
  return TAGS[level];
};

export default {
  name: "Heading",
  props: {
    node: { attrs: Object },
  },
  methods: {
    attrsToStyle,
    getTag,
  },
};
</script>

<template>
  <component :is="getTag(node.attrs.level)" :style="attrsToStyle(node.attrs)">
    <slot />
  </component>
</template>

