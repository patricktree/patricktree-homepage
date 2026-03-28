'use client';
import { styled } from '@pigment-css/react';
import React from 'react';
import invariant from 'tiny-invariant';

import type { Heading } from '@patricktree-homepage/mdx/schema';
import { useMediaMatch } from '@patricktree-homepage/react-utils/react.utils.jsx';
import { uiUtils } from '@patricktree-homepage/ui-utils/ui.utils';

import { TOC_QUERY } from '#pkg/constants-browser.js';
import { Anchor } from '#pkg/elements/index.js';

export type TableOfContentsAnchorsProps = {
  headings: Heading[];
};

export const TableOfContentsAnchors: React.FC<TableOfContentsAnchorsProps> = ({ headings }) => {
  const matches = useMediaMatch(TOC_QUERY);

  /*
   * Set up state and effect for tracking the section of the article the user has currently scrolled to.
   * This is used to highlight the anchor of the table of contents which links to the heading of that section.
   */
  const [headingsAboveTheFold, setHeadingsAboveTheFold] = React.useState<{
    idOfLastHeadingAboveTheFold?: string | undefined;
    idOfFirstHeadingInViewport?: string | undefined;
  }>({});
  const [lastScrolledToHeading, setLastScrolledToHeading] = React.useState<
    undefined | { id: string; wentOutOfViewport: boolean }
  >();

  /*
   * Track which headings are currently present in the DOM.
   * This handles cases where some headings are conditionally rendered
   * (e.g. inside version tabs that show/hide content).
   */
  const [visibleHeadingIds, setVisibleHeadingIds] = React.useState<ReadonlySet<string> | undefined>(
    undefined,
  );

  React.useEffect(
    function trackHeadingsPresenceInDom() {
      function computeVisibleIds() {
        const ids = new Set<string>();
        for (const heading of headings) {
          if (document.querySelector(`#${heading.id}`)) {
            ids.add(heading.id);
          }
        }
        return ids;
      }

      function updateVisibleHeadingIds() {
        setVisibleHeadingIds((prev) => {
          const next = computeVisibleIds();
          if (prev?.size === next.size && [...prev].every((id) => next.has(id))) {
            return prev;
          }
          return next;
        });
      }

      updateVisibleHeadingIds();

      let rafId: number | undefined;
      const observer = new MutationObserver(() => {
        if (rafId !== undefined) {
          cancelAnimationFrame(rafId);
        }
        rafId = requestAnimationFrame(updateVisibleHeadingIds);
      });
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        if (rafId !== undefined) {
          cancelAnimationFrame(rafId);
        }
      };
    },
    [headings],
  );

  /*
   * During SSR (visibleHeadingIds is undefined), show no headings — they will pop in on the client.
   * The ToC is auxiliary content not relevant for SEO.
   */
  const visibleHeadings = React.useMemo(
    () =>
      visibleHeadingIds === undefined ? [] : headings.filter((h) => visibleHeadingIds.has(h.id)),
    [headings, visibleHeadingIds],
  );

  React.useEffect(
    function observeLastScrolledToHeadingGoingOutOfViewport() {
      if (matches === 'SSR' || !matches) {
        return;
      }

      if (!lastScrolledToHeading || lastScrolledToHeading.wentOutOfViewport) {
        return;
      }

      let unobserveViewportObserver = startViewportObserver();

      function startViewportObserver() {
        invariant(lastScrolledToHeading);

        const $lastScrolledToHeading = document.querySelector(`#${lastScrolledToHeading.id}`);
        invariant($lastScrolledToHeading instanceof HTMLElement);

        let firstObserverInvocationHasBeenIgnored = false;
        const observer = new IntersectionObserver(
          () => {
            if (!firstObserverInvocationHasBeenIgnored) {
              firstObserverInvocationHasBeenIgnored = true;
              return;
            }

            if (uiUtils.isEntirelyInViewport($lastScrolledToHeading)) {
              return;
            }

            setLastScrolledToHeading({ ...lastScrolledToHeading, wentOutOfViewport: true });
          },
          { threshold: 1 },
        );

        observer.observe($lastScrolledToHeading);

        uiUtils.observeRemovalOfElementOnce($lastScrolledToHeading, () => {
          unobserveViewportObserver();
          unobserveViewportObserver = startViewportObserver();
        });

        return function unobserve() {
          observer.unobserve($lastScrolledToHeading);
        };
      }

      return function cleanup() {
        unobserveViewportObserver();
      };
    },
    [lastScrolledToHeading, matches],
  );

  React.useEffect(
    function observeHeadingsAndDetectLastHeadingAboveTheFold() {
      if (matches === 'SSR' || !matches) {
        return;
      }

      const $headings: HTMLElement[] = [];
      for (const heading of visibleHeadings) {
        const $element = document.querySelector(`#${heading.id}`);
        if ($element instanceof HTMLElement) {
          $headings.push($element);
        }
      }

      const observer = new IntersectionObserver(
        () => {
          const $headingsAboveTheFold = $headings.filter(($heading) =>
            uiUtils.isEntirelyAboveTheFold($heading),
          );
          const $firstHeadingInViewport = $headingsAboveTheFold.find(($heading) =>
            uiUtils.isEntirelyInViewport($heading),
          );
          const $lastHeadingAboveTheFold = $headingsAboveTheFold.at(-1);

          if ($lastHeadingAboveTheFold ?? $firstHeadingInViewport) {
            setHeadingsAboveTheFold({
              idOfLastHeadingAboveTheFold: $lastHeadingAboveTheFold?.id,
              idOfFirstHeadingInViewport: $firstHeadingInViewport?.id,
            });
          } else {
            setHeadingsAboveTheFold({});
          }
        },
        { threshold: 1 },
      );

      for (const $element of $headings) {
        observer.observe($element);
      }

      return function cleanup() {
        for (const $element of $headings) {
          observer.unobserve($element);
        }
      };
    },
    [visibleHeadings, matches],
  );

  const highlightedHeadingId: string | undefined =
    lastScrolledToHeading && !lastScrolledToHeading.wentOutOfViewport
      ? lastScrolledToHeading.id
      : (headingsAboveTheFold.idOfFirstHeadingInViewport ??
        headingsAboveTheFold.idOfLastHeadingAboveTheFold);

  return (
    <TocList>
      {visibleHeadings.map((heading) => {
        const highlighted = highlightedHeadingId === heading.id;
        return (
          <TocListItem key={heading.id}>
            <TocAnchor
              href={`#${heading.id}`}
              style={{
                color: highlighted ? 'var(--color-fg-interactive)' : undefined,
              }}
              onClick={() => {
                setLastScrolledToHeading({
                  id: heading.id,
                  wentOutOfViewport: false,
                });
              }}
            >
              {heading.text}
            </TocAnchor>
          </TocListItem>
        );
      })}
    </TocList>
  );
};

const TocList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--spacing-base));
  list-style: none;
`;

const TocListItem = styled.li`
  /* display: flex to not "compound" line-height */
  display: flex;
  margin: 0;
`;

const TocAnchor = styled(Anchor)`
  font-size: var(--font-size-sm);
  text-decoration: none;
`;
