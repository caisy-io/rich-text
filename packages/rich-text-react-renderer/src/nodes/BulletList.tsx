import React, { FC } from "react";

import { attrsToStyle } from "../transformer/attrsToStyle";
const BulletList: FC<{ node: any }> = ({ children, node: { attrs } }) => (
  <ul style={attrsToStyle(attrs)}>{children}</ul>
);

export default BulletList;
