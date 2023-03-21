import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import CodeBlockStyles from "./CodeBlock.css?inline";

const CodeBlock = component$<{ node: any }>(({ node }) => {
  useStylesScoped$(CodeBlockStyles);
  return (
    <pre style={attrsToStyle(node?.attrs)}>
      <Slot />
    </pre>
  );
});

export default CodeBlock;
