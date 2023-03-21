import { component$ } from "@builder.io/qwik";
import type { FunctionComponent, JSXNode } from "@builder.io/qwik";
// import type { IntrinsicHTMLElements } from "@builder.io/qwik/jsx-runtime";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import Text from "../text/Text";
interface IHeader {
  attrs?: any;
  text?: any;
  nodesArr?: any;
}

export const headingCreator = ({
  text,
  attrs,
  nodesArr,
}: IHeader): JSXNode<string | FunctionComponent<Record<string, any>>> => {
  const CustomTag = `h${attrs.level}` as any;

  return (
    <CustomTag style={attrsToStyle(attrs)}>
      {nodesArr ? <Text nodesArr={nodesArr} /> : text}
    </CustomTag>
  );
};

export default component$<IHeader>(({ text, attrs, nodesArr }) => {
  return headingCreator({ text, attrs, nodesArr });
});
