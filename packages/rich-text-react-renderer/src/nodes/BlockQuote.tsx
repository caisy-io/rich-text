import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const BlockQuote: FC<{ node: any }> = ({ children, node: { attrs } }) => <blockquote style={attrsToStyle(attrs)}>{children}</blockquote>;


export default BlockQuote;
