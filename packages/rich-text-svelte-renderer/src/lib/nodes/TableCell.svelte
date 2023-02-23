<script lang="ts">
	import { attrsToStyle } from "../transformer/attrsToStyle";
	export let node: any;
</script>
  <td colspan={ node?.attrs?.colspan ? node?.attrs?.colspan : undefined} rowspan={ node?.attrs?.rowspan ? node?.attrs?.rowspan : undefined} style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></td>
