import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

export default component$<{ node: any }>(({ node: { attrs } }) => {
  return (
    <pre style={attrsToStyle(attrs)}>
      <Slot />
    </pre>
  );
});
