import React from "react";
import * as ReactIs from "react-is";

export const reactUtils = { createContext, getNodeText };

const SYMBOL_CONTEXT_NOT_FOUND = Symbol("ContextNotFound");
type SYMBOL_CONTEXT_NOT_FOUND = typeof SYMBOL_CONTEXT_NOT_FOUND;

function createContext<ContextValue>(name: string) {
  const Context = React.createContext<ContextValue | SYMBOL_CONTEXT_NOT_FOUND>(
    SYMBOL_CONTEXT_NOT_FOUND,
  );

  function useContextValue() {
    const valueOfContext = React.useContext(Context);
    if (valueOfContext === SYMBOL_CONTEXT_NOT_FOUND) {
      throw new Error(`${name} context is not available`);
    }
    return valueOfContext;
  }

  /* `Provider` captures `Context` from this scope, so it cannot be hoisted out */
  // oxlint-disable-next-line unicorn/consistent-function-scoping
  const Provider: React.FC<{
    children: React.ReactNode;
    value: ContextValue;
  }> = ({ children, value }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { useContextValue, Provider };
}

export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    /* this is the SSR hydration idiom: the value has to start out `false` so that server and client
       render identically, and only flip to `true` after the client has mounted */
    // oxlint-disable-next-line react-you-might-not-need-an-effect/no-initialize-state
    setIsMounted(true);
  }, []);

  return isMounted;
}

/** Based on https://stackoverflow.com/a/60564620/1700319 */
function getNodeText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }
  if (typeof node === "number") {
    return `${node}`;
  }
  if (Array.isArray(node)) {
    return node.map((childNode: React.ReactNode) => getNodeText(childNode)).join("");
  }
  if (ReactIs.isElement(node)) {
    return getNodeText(node.props.children);
  }
  throw new Error(`should not get here`);
}

/**
 * Based on
 * https://github.com/imbhargav5/rooks/blob/76426161edca1f233c8d4dea6ce5e5f97d4ff607/packages/rooks/src/hooks/useMediaMatch.ts
 *
 * A react hook that signals whether or not a media query is matched.
 *
 * @param query The media query to signal on. Example, `"print"` will signal `true` when previewing
 *   in print mode, and `false` otherwise.
 * @returns If "window" is not defined, "SSR"; if "window" is defined a boolean whether or not the
 *   media query is currently matched.
 * @see https://rooks.vercel.app/docs/useMediaMatch
 */
export function useMediaMatch(query: string): boolean | "SSR" {
  const matchMedia = React.useMemo<MediaQueryList | undefined>(() => {
    /* explicit usage of `window` here */
    if (typeof window === "undefined") {
      return undefined;
    }
    /* explicit usage of `window` here */
    return window.matchMedia(query);
  }, [query]);
  const [matches, setMatches] = React.useState<boolean | "SSR">(() => {
    if (!matchMedia) {
      return "SSR";
    }
    return matchMedia.matches;
  });

  React.useEffect(() => {
    if (!matchMedia) {
      return undefined;
    }

    setMatches(matchMedia.matches);

    function onMatchMediaChangeListener(event: MediaQueryListEventMap["change"]) {
      setMatches(event.matches);
    }

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", onMatchMediaChangeListener);
      return () => matchMedia.removeEventListener("change", onMatchMediaChangeListener);
    } else {
      matchMedia.addListener(onMatchMediaChangeListener);
      return () => matchMedia.removeListener(onMatchMediaChangeListener);
    }
  }, [matchMedia]);

  return matches;
}
