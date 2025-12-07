'use client';

import { styled } from '@pigment-css/react';
import React, { useEffect, useRef } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(function updateProgressBarOnScroll() {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate the total scrollable height
      const scrollableHeight = documentHeight - windowHeight;

      let progress = 0;
      if (scrollableHeight > 0) {
        progress = (scrollTop / scrollableHeight) * 100;
      }

      // Clamp progress between 0 and 100
      progress = Math.min(Math.max(progress, 0), 100);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    // Trigger once on mount to set initial state
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

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
  height: 4px;
  pointer-events: none; /* Let clicks pass through */
`;

const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background-color: var(--color-fg-interactive);
  transition: width 0.1s ease-out;
`;
