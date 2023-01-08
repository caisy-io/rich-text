import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const Table: FC<{ node: any }> = ({ children, node: { attrs } }) => (
  <table>
    <tbody style={attrsToStyle(attrs)}>{children}</tbody>
  </table>
);

export default Table;
