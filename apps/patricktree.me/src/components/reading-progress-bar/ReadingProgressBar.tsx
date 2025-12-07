'use client';

import { styled } from '@pigment-css/react';
import React from 'react';

import { useReadingProgressContext } from '#pkg/components/reading-progress-bar/ReadingProgressContext.jsx';

export const ReadingProgressBar: React.FC = () => {
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  const { readingEnd, readingTarget } = useReadingProgressContext();

  React.useEffect(
    function updateProgressBarOnScroll() {
      const updateProgress = () => {
        if (!progressBarRef.current || !readingTarget || !readingEnd) {
          return;
        }

        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        const targetTop = readingTarget.getBoundingClientRect().top + scrollTop;
        const endTop = readingEnd.getBoundingClientRect().top + scrollTop;

        const startPosition = targetTop;
        const endPosition = endTop - viewportHeight;
        const scrollableHeight = endPosition - startPosition;

        let progress;
        if (scrollableHeight <= 0) {
          progress = scrollTop >= startPosition ? 100 : 0;
        } else {
          progress = ((scrollTop - startPosition) / scrollableHeight) * 100;
        }

        // Clamp progress between 0 and 100
        progress = Math.min(Math.max(progress, 0), 100);

        progressBarRef.current.style.width = `${progress}%`;
      };

      window.addEventListener('scroll', updateProgress, { passive: true });
      window.addEventListener('resize', updateProgress);
      // Trigger once on mount to set initial state
      updateProgress();

      return () => {
        window.removeEventListener('scroll', updateProgress);
        window.removeEventListener('resize', updateProgress);
      };
    },
    [readingEnd, readingTarget],
  );

  return (
    <ProgressBarContainer>
      <ProgressBar ref={progressBarRef} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 6px;
  pointer-events: none; /* Let clicks pass through */
`;

const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background-color: var(--color-fg-interactive);
  transition: width 0.1s ease-out;
`;
