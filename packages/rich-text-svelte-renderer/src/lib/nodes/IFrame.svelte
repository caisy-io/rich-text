<script lang="ts">
	import { attrsToStyle } from '../transformer/attrsToStyle';
	export let node: any;
	const attrs = node.attrs;
</script>

<iframe
	style={node?.attrs ? attrsToStyle(node.attrs) : undefined}
	src={attrs.src}
	allow={attrs.allow}
	title={attrs.title}
	frameBorder={attrs.frameborder}
	height={attrs.height}
	width={attrs.width}
	allowFullScreen={attrs.allowfullscreen}><slot /></iframe
>
