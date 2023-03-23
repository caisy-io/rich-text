import { Slot, component$ } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

interface IParagraph {
  node: any;
}

export default component$<IParagraph>(({ node: { attrs } }) => (
  <p style={attrsToStyle(attrs)}>
    <Slot />
  </p>
));
