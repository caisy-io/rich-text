import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const CodeBlock: FC<{ node: any }> = ({ children, node: { attrs } }) => <pre style={attrsToStyle(attrs)}>{children}</pre>;


export default CodeBlock;
