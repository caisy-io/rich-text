import { attrsToStyle } from "../transformer/attrsToStyle";

import { Component, JSXElement } from "solid-js";

const IFrame: Component<{ node: any; children: JSXElement }> = ({ node: { attrs } }) => (
  <iframe
    style={attrsToStyle(attrs)}
    src={attrs.src}
    allow={attrs.allow}
    title={attrs.title}
    height={attrs.height}
    width={attrs.width}
    allowfullscreen={attrs.allowFullScreen}
  />
);

export default IFrame;
