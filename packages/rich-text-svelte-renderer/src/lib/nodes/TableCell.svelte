<script lang="ts">
	import { attrsToStyle } from "../transformer/attrsToStyle";
	export let node: any;
</script>
  <td style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></td>
