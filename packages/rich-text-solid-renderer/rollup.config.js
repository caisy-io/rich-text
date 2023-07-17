import withRollup from "rollup-preset-solid";

export default withRollup([
  { input: "src/lib.tsx", mappingName: "browser" },
  {
    input: "src/lib.tsx",
    mappingName: "server",
    solidOptions: { generate: "ssr", hydratable: false },
  },
]);