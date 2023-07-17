export const attrsToStyle = (attrs: any) => {
  let style: any = {};
  if (attrs && attrs.textAlign) {
    style.textAlign = attrs.textAlign;
  }

  if (Object.keys(style).length == 0) {
    return undefined;
  }

  return style;
};
