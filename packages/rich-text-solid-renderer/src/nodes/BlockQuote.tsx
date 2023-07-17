
import { Component, JSXElement } from "solid-js";
import { attrsToStyle } from "../transformer/attrsToStyle";

const BlockQuote: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => (
  <blockquote style={attrsToStyle(attrs)}>{children}</blockquote>
);

export default BlockQuote;
