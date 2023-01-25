<template>
  <RichtextRenderer :node="node.json">some childs</RichtextRenderer>
</template>

<script>
import { AllInOneSampleText } from "../fixtures/";
import RichtextRendererVue from "./rich-text-renderer/RichtextRenderer.vue";

export default {
  name: "App",
  components: {
    RichtextRenderer: RichtextRendererVue,
  },
  data: () => ({
    node: AllInOneSampleText,
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
