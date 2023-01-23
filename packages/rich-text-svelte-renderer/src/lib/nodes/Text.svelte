<script lang="ts">
	export let node: any;
	// type Marks = 'bold' | 'italic' | 'strike' | 'link' | 'code';
</script>

{#if node.marks && node.marks[0]}
	{#if node.marks[0].type === 'bold'}
		<strong>
			<svelte:self node={{ ...node, marks: node.marks.slice().shift() }} />
		</strong>
    {:else if node.marks[0].type === 'italic'}
		<em>
			<svelte:self node={{ ...node, marks: node.marks.slice().shift() }} />
		</em>
    {:else if node.marks[0].type === 'strike'}
		<s>
			<svelte:self node={{ ...node, marks: node.marks.slice().shift() }} />
		</s>
    {:else if node.marks[0].type === 'code'}
		<code>
      <svelte:self node={{ ...node, marks: node.marks.slice().shift() }} />
		</code>
    {:else if node.marks[0].type === 'link'}
    <a href={node.marks[0].attrs?.href} target={node.marks[0].attrs?.target}>
      <svelte:self node={{ ...node, marks: node.marks.slice(1) }} />
    </a>
    {:else }
    unknown mark type: {node.marks[0].type}
	{/if}
  {:else }
  {node.text}
  <slot></slot>
{/if}

