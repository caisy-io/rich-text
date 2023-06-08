import {generateHTML, generateJSON} from "@tiptap/html"

import {Extensions} from "./extension"
export {Extensions} from "./extension"

export function parseHTMLToJSON(html: string) {
  return generateJSON(html, Extensions)
}

export function parseJSONToHTML(json: any) {
    return generateHTML(json, Extensions)
}