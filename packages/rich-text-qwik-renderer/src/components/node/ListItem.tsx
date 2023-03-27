import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

export default component$<{ node: any }>(({ node: { attrs } }) => (
  <li style={attrsToStyle(attrs)}>
    <Slot />
  </li>
));
