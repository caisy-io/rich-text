<script lang="ts">
	export let node: any;
	export let overwrites: any;

	import Doc from '$lib/nodes/Doc.svelte';
	import Paragraph from '$lib/nodes/Paragraph.svelte';
	import Text from '$lib/nodes/Text.svelte';
	import BlockQuote from '$lib/nodes/BlockQuote.svelte';
	import BulletList from '$lib/nodes/BulletList.svelte';
	import OrderedList from '$lib/nodes/OrderedList.svelte';
	import ListItem from '$lib/nodes/ListItem.svelte';
	import Heading from '$lib/nodes/Heading.svelte';
	import DocumentLink from '$lib/nodes/DocumentLink.svelte';
	import IFrame from '$lib/nodes/IFrame.svelte';
	import Table from '$lib/nodes/Table.svelte';
	import TableRow from '$lib/nodes/TableRow.svelte';
	import TableCell from '$lib/nodes/TableCell.svelte';
	import TableHeader from '$lib/nodes/TableHeader.svelte';
	import HardBreak from '$lib/nodes/HardBreak.svelte';
	import CodeBlock from '$lib/nodes/CodeBlock.svelte';

	export const DEFAULT_BLOCK_MAP: any = {
		doc: Doc,
		paragraph: Paragraph,
		hardBreak: HardBreak,
		codeBlock: CodeBlock,
		text: Text,
		blockquote: BlockQuote,
		listItem: ListItem,
		bulletList: BulletList,
		orderedList: OrderedList,
		heading: Heading,
		iframe: IFrame,
		table: Table,
		tableHeader: TableHeader,
		tableRow: TableRow,
		tableCell: TableCell,
		documentLink: DocumentLink
	};

	const blockMap = {
		...DEFAULT_BLOCK_MAP,
		...overwrites
	}

</script>

{#if node.content}
	{#each node.content as child}
		<svelte:component this={blockMap[child.type]} node={child}>
			{#if child.content}
				<svelte:self node={child} />
			{/if}
		</svelte:component>
	{/each}
{/if}
<slot />
