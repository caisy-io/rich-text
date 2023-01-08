<script lang="ts">
	import { attrsToStyle } from '$lib/transformer/attrsToStyle';

	export let node: any;
</script>

<ol style={attrsToStyle(node.attrs)}><slot /></ol>
