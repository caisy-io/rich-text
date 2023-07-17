import { Component, JSXElement } from "solid-js";
import { attrsToStyle } from "../transformer/attrsToStyle";

const BulletList: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => (
  <ul style={attrsToStyle(attrs)}>{children}</ul>
);

export default BulletList;
