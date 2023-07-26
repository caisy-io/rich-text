import React, { FC } from "react";
import ImageAsset from "./ImageAsset";

const DocumentLink: FC<{ node: any }> = ({ children, node }) => {
  if (node.attrs.src) {
    return <ImageAsset {...node} />
  }

  console.warn("documentLink should be implemented with an overwrite in the richtext");
  return (
    <>
      {node?.attrs?.documentId ?? ""}
      {children}
    </>
  );
};

export default DocumentLink;
