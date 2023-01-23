<script lang="ts">
export let node: any;
import { attrsToStyle } from "../transformer/attrsToStyle";
</script>

<p style={(node?.attrs ? attrsToStyle(node.attrs) : undefined) }><slot></slot></p>
