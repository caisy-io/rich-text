import { attrsToStyle } from "../transformer/attrsToStyle";
import { Component, JSXElement } from "solid-js";

const Table: Component<{ node: any; children: JSXElement }> = ({ children, node: { attrs } }) => (
  <table>
    <tbody style={attrsToStyle(attrs)}>{children}</tbody>
  </table>
);

export default Table;
