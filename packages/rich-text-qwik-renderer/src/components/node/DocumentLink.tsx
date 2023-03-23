import { component$, Slot } from "@builder.io/qwik";

export default component$<{ node: any }>(({ node }) => {
  console.warn(
    "documentLink should be implemented with an overwrite in the richtext"
  );
  return (
    <>
      {node?.attrs?.documentId ?? ""}
      <Slot />
    </>
  );
});
