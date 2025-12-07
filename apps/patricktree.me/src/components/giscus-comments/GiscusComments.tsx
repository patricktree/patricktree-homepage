'use client';

import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

import { config } from '#pkg/config.js';
import { ColorTheme, DataAttribute } from '#pkg/constants-browser.js';

export const GiscusComments: React.FC<{ giscusTerm: string }> = ({ giscusTerm }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(function syncReactStateThemeWithDataAttribute() {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute(DataAttribute.THEME);
      setTheme(currentTheme === ColorTheme.DARK ? 'dark' : 'light');
    };

    // Initial check
    updateTheme();

    // Observer for changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === DataAttribute.THEME) {
          updateTheme();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [DataAttribute.THEME],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Giscus
      repo={config.giscus.repo}
      repoId={config.giscus.repoId}
      category={config.giscus.category}
      categoryId={config.giscus.categoryId}
      mapping={config.giscus.mapping}
      strict={config.giscus.strict}
      term={`${config.giscus.termPrefix}/${giscusTerm}`}
      reactionsEnabled={config.giscus.reactionsEnabled}
      emitMetadata={config.giscus.emitMetadata}
      inputPosition={config.giscus.inputPosition}
      theme={theme}
      lang={config.giscus.lang}
    />
  );
};
