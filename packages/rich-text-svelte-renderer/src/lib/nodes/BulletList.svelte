<script lang="ts">
	import { attrsToStyle } from '../transformer/attrsToStyle';

	export let node: any;
</script>

<ul style={attrsToStyle(node.attrs)}><slot /></ul>
