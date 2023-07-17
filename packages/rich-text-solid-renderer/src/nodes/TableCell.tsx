import { attrsToStyle } from "../transformer/attrsToStyle";
import { Component, JSXElement } from "solid-js";
const TableCel: Component<{ children: JSXElement; node: any }> = ({
  children,
  node: { attrs },
}) => (
  <td
    colSpan={attrs?.colspan ? attrs?.colspan : undefined}
    rowSpan={attrs?.rowspan ? attrs?.rowspan : undefined}
    style={attrsToStyle(attrs)}
  >
    {children}
  </td>
);

export default TableCel;
