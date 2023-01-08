
<script lang="ts">
	import { attrsToStyle } from "$lib/transformer/attrsToStyle";
	export let node: any;
</script>
  <tr style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></tr>
