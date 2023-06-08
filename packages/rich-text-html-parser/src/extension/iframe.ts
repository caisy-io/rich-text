import { Node, mergeAttributes } from "@tiptap/core";

export interface IFrameOptions {
  HTMLAttributes: Record<string, any>;
}

/*eslint-disable */
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    iframe: {
      /**
       * Add an iframe
       */
      setIFrame: (options: {
        src: string;
        allow?: string;
        allowfullscreen?: string;
        title?: string;
        frameborder?: string;
        height?: string;
        width?: string;
      }) => ReturnType;
    };
  }
}
/*eslint-enable */

export const inputRegex = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;
export const IFrame = Node.create<IFrameOptions>({
  name: "iframe",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  atom: true,
  inline: false,
  group: "block",
  draggable: false,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      allow: {
        default: null,
      },
      title: {
        default: null,
      },
      frameborder: {
        default: "0",
      },
      height: {
        default: "100px",
      },
      width: {
        default: "100px",
      },
      allowfullscreen: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["iframe", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
});

export default IFrame;
