'use client';

import { styled } from '@pigment-css/react';

import { useReadingProgressContext } from '#pkg/components/reading-progress-bar/ReadingProgressContext.jsx';

export const ReadingProgressSentinel: React.FC = () => {
  const { setReadingEnd } = useReadingProgressContext();

  return <ReadingProgressSentinelDiv ref={setReadingEnd} aria-hidden />;
};

const ReadingProgressSentinelDiv = styled.div`
  visibility: hidden;
  width: 100%;
  height: 1px;
  pointer-events: none;
`;
