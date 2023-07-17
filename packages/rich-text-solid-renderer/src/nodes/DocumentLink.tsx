import { Component, JSXElement } from "solid-js";


const DocumentLink: Component<{ node: any; children: JSXElement }> = ({ children, node }) => {
  console.warn("documentLink should be implemented with an overwrite in the richtext");
  return (
    <>
      {node?.attrs?.documentId ?? ""}
      {children}
    </>
  );
};

export default DocumentLink;
