import React, { FC } from "react";
import { attrsToStyle } from "../transformer/attrsToStyle";
const ListItem: FC<{ node: any }> = ({ children, node: { attrs } }) => <li style={attrsToStyle(attrs)}>{children}</li>;

export default ListItem;
