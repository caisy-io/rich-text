<script>
import { attrsToStyle } from "../transformer/attrsToStyle";

export default {
  name: "IFrame",
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
  <iframe
    :style="attrsToStyle(node.attrs)"
    :src="node.attrs.src"
    :allow="node.attrs.allow"
    :title="node.attrs.title"
    :frameBorder="node.attrs.frameborder"
    :height="node.attrs.height"
    :width="node.attrs.width"
    :allowFullScreen="node.attrs.allowfullscreen"
  />
</template>

