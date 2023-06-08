import { mergeAttributes, Node } from "@tiptap/core";

export interface ITableCellOptions {
  HTMLAttributes: Record<string, any>;
}

export const TableCell = Node.create<ITableCellOptions>({
  name: "tableCell",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  // we do not use block here because we want to exlucde the documentLink block
  // sicne documentLink looks very ugly in the table
  content: "block+",
  // content: "(heading | paragraph | iframe)+",
  // "(blockquote | bulletList | codeBlock | hardBreak | heading | horizontalRule | iframe | orderedList | paragraph)+",
  // "(blockquote | bulletList | codeBlock | doc | documentLink | hardBreak | heading | horizontalRule | iframe | listItem | orderedList | paragraph | table | tableCell | tableHeader | tableRow | text)+",

  addAttributes() {
    return {
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
        parseHTML: (element) => {
          const colwidth = element.getAttribute("colwidth");
          const value = colwidth ? [parseInt(colwidth, 10)] : null;

          return value;
        },
      },
    };
  },

  tableRole: "cell",

  isolating: true,

  parseHTML() {
    return [{ tag: "td" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["td", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
