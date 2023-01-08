
<script lang="ts">
	import { attrsToStyle } from "$lib/transformer/attrsToStyle";
	export let node: any;
</script>
  <th style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></th>
