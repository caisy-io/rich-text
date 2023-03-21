import { Slot, component$ } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";

interface IParagraph {
  attrs?: any;
}

export default component$<IParagraph>(({ attrs }) => {
  return (
    <p style={attrsToStyle(attrs)}>
      <Slot />
    </p>
  );
});
