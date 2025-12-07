'use client';

import React from 'react';

import { reactUtils } from '@patricktree-homepage/react-utils/react.utils.jsx';

type ReadingProgressContextValue = {
  readingTarget: HTMLElement | null;
  readingEnd: HTMLElement | null;
  setReadingTarget: (element: HTMLElement | null) => void;
  setReadingEnd: (element: HTMLElement | null) => void;
};

const { useContextValue, Provider: ReadingProgressContextProvider } =
  reactUtils.createContext<ReadingProgressContextValue>('ReadingProgressContext');

export const ReadingProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readingTarget, setReadingTarget] = React.useState<HTMLElement | null>(null);
  const [readingEnd, setReadingEnd] = React.useState<HTMLElement | null>(null);

  const contextValue: ReadingProgressContextValue = {
    readingTarget,
    readingEnd,
    setReadingTarget,
    setReadingEnd,
  };

  return (
    <ReadingProgressContextProvider value={contextValue}>{children}</ReadingProgressContextProvider>
  );
};

export const useReadingProgressContext = useContextValue;
