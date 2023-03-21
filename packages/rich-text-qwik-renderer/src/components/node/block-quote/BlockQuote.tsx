import { component$ } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import Text from "../text/Text";

const BlockQuote = component$<{ node: any }>(({ node }) => {
  return (
    <blockquote style={attrsToStyle(node?.content?.[0]?.attrs)}>
      <Text nodesArr={node?.content?.[0].content} />
    </blockquote>
  );
});

export default BlockQuote;
