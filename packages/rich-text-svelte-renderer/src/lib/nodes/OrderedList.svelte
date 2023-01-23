<script lang="ts">
	import { attrsToStyle } from '../transformer/attrsToStyle';

	export let node: any;
</script>

<ol style={attrsToStyle(node.attrs)}><slot /></ol>
