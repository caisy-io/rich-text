
import { attrsToStyle } from "../transformer/attrsToStyle";
import { Component, JSXElement } from "solid-js";

const Paragraph: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => <p style={attrsToStyle(attrs)}>{children}</p>;

export default Paragraph;
