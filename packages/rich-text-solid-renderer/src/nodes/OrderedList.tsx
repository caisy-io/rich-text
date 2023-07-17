import { attrsToStyle } from "../transformer/attrsToStyle";
import { Component, JSXElement } from "solid-js";

const OrderedList: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => (
  <ol style={attrsToStyle(attrs)}>{children}</ol>
);

export default OrderedList;
