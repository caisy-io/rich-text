import { Component, JSXElement } from "solid-js";
import { documentRenderer, ElementType } from "./renderer";

export const RichTextRenderer: Component<{
  node: any;
  overwrites?: Partial<Record<ElementType, (JSXElement | Component<any> | null)> | null>;
}> = ({ node, overwrites }) => {
  
  if (!node) {
    return null;
  }
  return documentRenderer((overwrites as any) || {})(node)
};
