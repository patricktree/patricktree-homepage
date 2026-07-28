import type { refractor } from "refractor/all";

export const jsonc = (arg: unknown) => {
  /* refractor calls language plugins with an untyped argument */
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion
  const Prism = arg as typeof refractor;
  Prism.languages["jsonc"] = Prism.languages.extend("json", {});
};
jsonc.displayName = "jsonc";
