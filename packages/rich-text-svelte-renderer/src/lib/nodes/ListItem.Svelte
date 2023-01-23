<script lang="ts">
	import { attrsToStyle } from '../transformer/attrsToStyle';

	export let node: any;
</script>

<li style={attrsToStyle(node.attrs)}><slot></slot></li>
