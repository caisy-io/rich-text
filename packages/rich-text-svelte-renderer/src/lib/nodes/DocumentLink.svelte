<script lang="ts">
  console.warn("documentLink should be implemented with an overwrite in the richtext");

	export let node: any;
	export let connections: any;

	const connectedType = connections?.find((c: any) => c?.id === node?.attrs?.documentId)?.__typename
</script>
{connectedType ?? ""}
{node?.attrs?.documentId ?? ""}
<slot></slot>