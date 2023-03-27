import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

export default component$<{
  node: any;
}>(({ node: { attrs } }) => (
  <table>
    <tbody style={attrsToStyle(attrs)}>
      <Slot />
    </tbody>
  </table>
));
