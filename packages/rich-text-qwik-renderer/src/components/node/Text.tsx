import { Slot, component$ } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
type Marks = "bold" | "italic" | "strike" | "link" | "code";

const Mark = component$<{ mark: Marks; attrs: any }>(({ mark, attrs }) => {
  switch (mark) {
    case "bold":
      return (
        <strong>
          <Slot />
        </strong>
      );
    case "code":
      return (
        <code>
          <Slot />
        </code>
      );
    case "italic":
      return (
        <em>
          <Slot />
        </em>
      );
    case "strike":
      return (
        <s>
          <Slot />
        </s>
      );
    case "link":
      return (
        <a href={attrs.href} target={attrs.target}>
          <Slot />
        </a>
      );
    default:
      return <>{`unknown mark type: ${mark}`}</>;
  }
});

export default component$<{ node: any }>(({ node }) =>
  node.marks ? (
    node.marks.reduce(
      (memo: JSX.Element, mark: { type: Marks; attrs: any }) => {
        return (
          <Mark mark={mark.type} attrs={mark.attrs}>
            {memo}
          </Mark>
        );
      },
      <>{node.text}</>
    )
  ) : (
    <>{node.text}</>
  )
);
