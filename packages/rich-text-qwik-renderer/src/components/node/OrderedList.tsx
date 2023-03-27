import { component$, Slot } from "@builder.io/qwik";
import { attrsToStyle } from "../transformer/attrsToStyle";

interface IOrdererdList {
  node: any;
}

export default component$<IOrdererdList>(({ node: { attrs } }) => {
  return (
    <ol style={attrsToStyle(attrs)}>
      <Slot />
    </ol>
  );
});
