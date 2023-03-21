import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";

const CodeBlock = component$<{ node: any }>(({ node }) => {
  return (
    <pre style={attrsToStyle(node?.attrs)}>
      <Slot />
    </pre>
  );
});

export default CodeBlock;
