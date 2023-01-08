import React, { FC } from "react";
import { attrsToStyle } from "../transformer/attrsToStyle";

const Heading: FC<{ node: any }> = ({ node, children }) => {
  const attrs = node.attrs;
  const level = node.attrs.level;

  switch (level) {
    case 1:
      return <h1 style={attrsToStyle(attrs)}>{children}</h1>;
    case 2:
      return <h2 style={attrsToStyle(attrs)}>{children}</h2>;
    case 3:
      return <h3 style={attrsToStyle(attrs)}>{children}</h3>;
    case 4:
      return <h4 style={attrsToStyle(attrs)}>{children}</h4>;
    case 5:
      return <h5 style={attrsToStyle(attrs)}>{children}</h5>;
    case 6:
      return <h6 style={attrsToStyle(attrs)}>{children}</h6>;
  }

  return <></>;
};

export default Heading;
