<script lang="ts">
	import { attrsToStyle } from '$lib/transformer/attrsToStyle';

	export let node: any;
</script>

<pre style={attrsToStyle(node.attrs)}><slot></slot></pre>
