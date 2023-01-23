<script lang="ts">
	import { attrsToStyle } from '../transformer/attrsToStyle';

	export let node: any;

  const attrs = node.attrs;
  const level = node.attrs?.level;
</script>

{#if level === 1}
  <h1 style={attrsToStyle(attrs)}><slot /></h1>
{:else if level === 2}
  <h2 style={attrsToStyle(attrs)}><slot /></h2>
{:else if level === 3}
  <h3 style={attrsToStyle(attrs)}><slot /></h3>
{:else if level === 4}
  <h4 style={attrsToStyle(attrs)}><slot /></h4>
{:else if level === 5}
  <h5 style={attrsToStyle(attrs)}><slot /></h5>
{:else if level === 6}
  <h6 style={attrsToStyle(attrs)}><slot /></h6>
{/if}