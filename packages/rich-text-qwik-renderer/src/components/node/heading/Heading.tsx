import { component$ } from "@builder.io/qwik";
import type { FunctionComponent, JSXNode } from "@builder.io/qwik";
// import type { IntrinsicHTMLElements } from "@builder.io/qwik/jsx-runtime";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import Text from "../text/Text";
interface IHeader {
  level?: number;
  attrs?: any;
  text?: any;
  nodesArr?: any;
}

export const headingCreator = ({
  text,
  level,
  attrs,
  nodesArr,
}: IHeader): JSXNode<string | FunctionComponent<Record<string, any>>> => {
  const CustomTag = `h${level}` as any;

  return (
    <CustomTag>
      {nodesArr ? (
        <Text nodesArr={nodesArr} />
      ) : (
        <span style={attrsToStyle(attrs)}>{text}</span>
      )}
    </CustomTag>
  );
};

export default component$<IHeader>(({ text, level, attrs, nodesArr }) => {
  return headingCreator({ text, level, attrs, nodesArr });
});
