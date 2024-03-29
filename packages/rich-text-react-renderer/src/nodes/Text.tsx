import React, { FC } from "react";

type Marks = "bold" | "italic" | "strike" | "link" | "code";

const Mark: FC<{ mark: Marks; attrs: any }> = ({ mark, attrs, children }) => {
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

const Text: FC<{ node: any }> = ({ node }) =>
  node.marks ? (
    node.marks.reduce((memo: JSX.Element, mark: { type: Marks; attrs: any }) => {
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
