<script lang="ts">
  console.warn("documentLink should be implemented with an overwrite in the richtext");

	export let node: any;
</script>

{node?.attrs?.documentId ?? ""}
<slot></slot>