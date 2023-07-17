import { Component, JSXElement } from "solid-js";
import { attrsToStyle } from "../transformer/attrsToStyle";

const CodeBlock: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => (
  <pre style={attrsToStyle(attrs)}>{children}</pre>
);

export default CodeBlock;
