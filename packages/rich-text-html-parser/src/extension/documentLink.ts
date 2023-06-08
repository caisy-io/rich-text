import { Node } from "@tiptap/core";
import { mergeAttributes,  } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    documentLink: {
      /**
       * Add a document link
       */
      setDocumentLink: (options: { documentId: string }) => ReturnType;
      removeDocumentLink: () => ReturnType;
    };
  }
}

export interface IDocumentLinkOptions {
  HTMLAttributes: Record<string, any>;
}

export const DocumentLink = Node.create<IDocumentLinkOptions>({
  name: "documentLink",

  atom: true,
  inline: false,
  group: "block",
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {
        // "data-document-id": null,
      },
    };
  },
  addAttributes() {
    return {
      documentId: {
        parseHTML: (element) => element.getAttribute("data-document-id"),
        renderHTML: (attributes) => {
          return {
            "data-document-id": attributes.documentId,
          };
        },
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "connection",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["connection", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },

});
