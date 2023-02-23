import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const TableCel: FC<{ node: any }> = ({ children, node: { attrs } }) => <td colSpan={ attrs?.colspan ? attrs?.colspan : undefined} rowSpan={ attrs?.rowspan ? attrs?.rowspan : undefined} style={attrsToStyle(attrs)}>{children}</td>;

export default TableCel;
