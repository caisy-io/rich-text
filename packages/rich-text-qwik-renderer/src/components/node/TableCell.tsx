import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

export default component$<{ node: any }>(({ node: { attrs } }) => (
  <td
    colSpan={attrs?.colspan ? attrs?.colspan : undefined}
    rowSpan={attrs?.rowspan ? attrs?.rowspan : undefined}
    style={attrsToStyle(attrs)}
  >
    <Slot />
  </td>
));
