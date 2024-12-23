import { component$ } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

export default component$<{ node: any }>(({ node: { attrs } }) => (
  <iframe
    style={attrsToStyle(attrs)}
    src={attrs.src}
    allow={attrs.allow}
    title={attrs.title}
    frameBorder={attrs.frameborder}
    height={attrs.height}
    width={attrs.width}
    allowFullscreen={attrs.allowfullscreen}
  />
));
