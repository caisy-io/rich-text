import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const OrderedList: FC<{ node: any }> = ({ children, node: { attrs } }) => <ol style={attrsToStyle(attrs)}>{children}</ol>;


export default OrderedList;
