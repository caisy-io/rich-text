import React, { FC } from "react";

const DocumentLink: FC<{ node: any }> = ({ children, node }) => {
  console.warn("documentLink should be implemented with an overwrite in the richtext");
  return <>
  {node?.attrs?.documentId ?? ""}
  {children}</>;
};

export default DocumentLink;