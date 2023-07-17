import { attrsToStyle } from "../transformer/attrsToStyle";
import { Component, JSXElement } from "solid-js";

const ListItem: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => <li style={attrsToStyle(attrs)}>{children}</li>;

export default ListItem;
