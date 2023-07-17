import { Component, JSXElement } from "solid-js";

type Marks = "bold" | "italic" | "strike" | "link" | "code";

const Mark: Component<{ mark: Marks; attrs: any; children: JSXElement }> = ({ mark, attrs, children }) => {
  switch (mark) {
    case "bold":
      return <strong>{children}</strong>;
    case "code":
      return <code>{children}</code>;
    case "italic":
      return <em>{children}</em>;
    case "strike":
      return <s>{children}</s>;
    case "link":
      return (
        <a href={attrs.href} target={attrs.target}>
          {children}
        </a>
      );
    default:
      console.warn(`unknown mark type: ${mark}`);
      if (children) {
        return <>{children}</>;
      } else {
        return null;
      }
  }
};

const Text: Component<{ node: any }> = ({ node }) =>
  node.marks ? (
    node.marks.reduce((memo: JSXElement, mark: { type: Marks; attrs: any }) => {
      return (
        <Mark mark={mark.type} attrs={mark.attrs}>
          {memo}
        </Mark>
      );
    }, <>{node.text}</>)
  ) : (
    <>{node.text}</>
  );

export default Text;
