<script lang="ts">
	import { attrsToStyle } from "../transformer/attrsToStyle";
	export let node: any;
</script>
  <table>
  <tbody style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></tbody>
</table>
