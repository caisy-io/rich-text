import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const TableCel: FC<{ node: any }> = ({ children, node: { attrs } }) => <td style={attrsToStyle(attrs)}>{children}</td>;

export default TableCel;
