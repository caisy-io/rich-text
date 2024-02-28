# Vue.js Rich Text Renderer

For Vue.js, we wrote a helper library that makes the integration process of rich texts from Caisy as easy as possible.

## Installation

To install, use npm or another package manager:
```bash
npm install @caisy/rich-text-vue-renderer --save
```
## Usage

For ease of use, just pass the JSON and the component will convert it to HTML:

```vue
<template>
  <div v-if="data?.text && data?.text?.json">
    <RichTextRenderer :node="data.text.json" />
  </div>
</template>

<script>
import { RichTextRenderer } from "@caisy/rich-text-vue-renderer";
...
</script>
```

## Correct Object Structure

To ensure that you pass the correct object, it should contain something like this:

```json
{ type: "doc", ... }
```

## Example Codepen/Stackblitz
An example using the rich text render with Vue.js and Nuxt can also be found here on Stackblitz:
[https://stackblitz.com/github/caisy-io/caisy-example-nuxt](https://stackblitz.com/github/caisy-io/caisy-example-nuxt)
