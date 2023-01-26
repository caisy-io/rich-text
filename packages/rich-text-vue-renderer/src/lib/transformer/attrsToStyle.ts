export const attrsToStyle = (attrs: { [prop: string]: any }) => {
  let style: { textAlign?: string } = {};
  if (attrs && attrs.textAlign) {
    style.textAlign = attrs.textAlign;
  }

  if (Object.keys(style).length == 0) {
    return undefined;
  }

  return style;
};
