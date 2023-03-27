import { component$ } from "@builder.io/qwik";
import { documentRenderer } from "./renderer";

export const RichTextRenderer = component$<{
  node: any;
  overwrites?: any;
}>(({ node, overwrites }) => {
  if (!node) {
    return null;
  }
  const renderer = documentRenderer((overwrites as any) || {});
  return <>{renderer(node)}</>;
});
