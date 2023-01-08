import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const Paragraph: FC<{ node: any }> = ({ children, node: { attrs } }) => <p style={attrsToStyle(attrs)}>{children}</p>;

export default Paragraph;
