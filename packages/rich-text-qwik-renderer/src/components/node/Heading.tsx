import { component$, Slot } from "@builder.io/qwik";
// import type { IntrinsicHTMLElements } from "@builder.io/qwik/jsx-runtime";
import { attrsToStyle } from "../transformer/attrsToStyle";

interface IHeadingNode {
  attrs: any;
  level: number;
}
interface IHeader {
  node: IHeadingNode;
}

export default component$<IHeader>(({ node: { attrs } }) => {
  const level = attrs.level;
  const CustomTag = `h${level}` as any;
  return (
    <CustomTag style={attrsToStyle(attrs)}>
      <Slot />
    </CustomTag>
  );
});
