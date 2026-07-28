import * as _React from "react";

declare module "react" {
  /* augmenting an existing declaration requires `interface`, `type` cannot be merged */
  // oxlint-disable-next-line typescript/consistent-type-definitions
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
