import type React from "react";
import type { IconProps as ReactFeatherIconProps } from "react-feather";

type IconProps = {
  /** Default size is 24px (similar to library `react-feather`). */
  size?: ReactFeatherIconProps["size"];
};

/**
 * Taken and adapted from
 * https://fonts.google.com/icons?selected=Material+Symbols+Outlined:cookie:FILL@0;wght@400;GRAD@0;opsz@24
 * Changes: - Added "viewBox" so that the icon fills its SVG bounding client rect completely without
 * whitespace, and to make the icon resizable. - Set "fill" to "currentColor" so that the icon
 * adapts to the font-size of its surrounding context. - Takes a property "size" which will set
 * "height" and "width".
 */
/**
 * Taken and adapted from
 * https://fonts.google.com/icons?selected=Material+Symbols+Outlined:cookie:FILL@0;wght@400;GRAD@0;opsz@24
 * Changes: - Added "viewBox" so that the icon fills its SVG bounding client rect completely without
 * whitespace, and to make the icon resizable. - Set "fill" to "currentColor" so that the icon
 * adapts to the font-size of its surrounding context. - Takes a property "size" which will set
 * "height" and "width".
 */
export const Bsky: React.FC<IconProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 568 501"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"
      fill="currentColor"
    />
  </svg>
);

export const X: React.FC<IconProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);
