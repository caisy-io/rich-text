import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import BlockQuoteStyles from "./BlockQuote.css?inline";
import Text from "../text/Text";

const BlockQuote = component$<{ node: any }>(({ node }) => {
  useStylesScoped$(BlockQuoteStyles);
  return (
    <blockquote style={attrsToStyle(node?.content?.[0]?.attrs)}>
      <Text nodesArr={node?.content?.[0].content} />
    </blockquote>
  );
});

export default BlockQuote;
