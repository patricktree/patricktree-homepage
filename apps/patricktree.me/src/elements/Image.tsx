/* importing from next/image is allowed here */
import NextImage from "next/image";
import React from "react";

export type ImageProps = React.ComponentProps<typeof NextImage> & {
  style?: React.CSSProperties;
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(function AnchorInner(
  { alt, ...delegated },
  ref,
) {
  return <NextImage ref={ref} alt={alt} {...delegated} />;
});
