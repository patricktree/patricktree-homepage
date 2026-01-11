import './cascade-layers-definition.css';
import '@pigment-css/react/styles.css';
import '@fontsource-variable/rubik';

import { styled } from '@pigment-css/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import type React from 'react';

import { cssReset, cssBase, cssPrismaTheme } from '#pkg/app/global-styles.js';
import { EnableAnimationsAfterHydration } from '#pkg/components/enable-animations-after-hydration/EnableAnimationsAfterHydration.jsx';
import { Footer } from '#pkg/components/footer/index.js';
import { Header } from '#pkg/components/header/index.js';
import { config } from '#pkg/config.js';
import {
  Animations,
  Classes,
  ColorTheme,
  CookieName,
  DataAttribute,
  IsAnimationEnabled,
  TOC_QUERY,
} from '#pkg/constants-browser.js';

const fontMonospace = localFont({
  src: [
    {
      path: '../assets/fonts/CascadiaMono.woff2',
      style: 'normal',
      weight: '200 700',
    },
    {
      path: '../assets/fonts/CascadiaMonoItalic.woff2',
      style: 'italic',
      weight: '200 700',
    },
  ],
  display: 'swap',
  variable: '--font-family-monospace',
});

type LayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(CookieName.THEME);
  const theme = themeCookie?.value === ColorTheme.DARK ? ColorTheme.DARK : undefined;

  return (
    <html
      lang="en"
      className={fontMonospace.variable}
      {...(theme === ColorTheme.DARK && { [DataAttribute.THEME]: ColorTheme.DARK })}
    >
      <head>
        {/* disable automatic (faulty) detection of phone numbers on Safari */}
        <meta name="format-detection" content="telephone=no" />

        {/* if JS is disabled, apply "display: none" to all elements which the JS_REQUIRED class is applied to */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                  .${Classes.JS_REQUIRED} {
                    display: none !important;
                  }
                `,
            }}
          />
        </noscript>

        {/* Plausible analytics */}
        <script
          defer
          data-domain={config.canonicalTLDPlus1}
          data-api="/p.io/api/event"
          src="/p.io/js/script.js"
        />

        <style dangerouslySetInnerHTML={{ __html: cssReset }} />
        <style dangerouslySetInnerHTML={{ __html: cssBase }} />
        <style dangerouslySetInnerHTML={{ __html: cssPrismaTheme }} />

        {/* 
              Some critical CSS which will disable animations until some data attribute is set on the 
              root element. This will avoid running animations on mount of components.
          */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                *:root:not([${DataAttribute.IS_ANIMATION_ENABLED}='${IsAnimationEnabled.YES}']) * {
                  /* https://css-tricks.com/revisiting-prefers-reduced-motion/ */
                  animation-duration: 0.001ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.001ms !important;
                }
              
                *:root[${DataAttribute.IS_ANIMATION_ENABLED}='${IsAnimationEnabled.YES}'] a,
                *:root[${DataAttribute.IS_ANIMATION_ENABLED}='${IsAnimationEnabled.YES}'] svg * {
                  transition: color 150ms, fill 150ms;
                }
              `,
          }}
        />

        {/* Some critical CSS defining keyframes animations */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                @keyframes ${Animations.HIDE} {
                  to {
                    display: none;
                  }
                }

                @keyframes ${Animations.SLIDE_LEFT} {
                  0% {
                    transform: translateX(0%);
                  }
                  50% {
                    transform: translateX(calc(-100% + -1 * var(--app-padding-inline)));
                  }
                  50.1% {
                    transform: translateX(calc(-100% + -1 * var(--app-padding-inline)));
                    display: none;
                  }
                  100% {
                    transform: translateX(calc(-100% + -1 * var(--app-padding-inline)));
                    display: none;
                  }
                }
                
                @keyframes ${Animations.SLIDE_RIGHT} {
                  0% {
                    transform: translateX(calc(-100% + -1 * var(--app-padding-inline)));
                    display: none;
                  }
                  0.1% {
                    transform: translateX(calc(-100% + -1 * var(--app-padding-inline)));
                  }
                  50% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(0%);
                  }
                }
              `,
          }}
        />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: blockingThemeScript }} />

        <div id="__next">
          <EnableAnimationsAfterHydration />

          <RootContainer>
            <Header />

            {children}

            <Footer />
          </RootContainer>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: config.deploymentOrigin,
  openGraph: {
    type: 'website',
    siteName: config.canonicalTLDPlus1,
    url: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootContainer = styled.div`
  --app-padding-inline: calc(2 * var(--spacing-base));
  --app-box-width: var(--box-width-md);
  --app-max-width: calc(var(--app-box-width) + 2 * var(--app-padding-inline));

  /* stylelint-disable-next-line media-query-no-invalid -- works */
  @media ${TOC_QUERY} {
    --app-box-width: var(--box-width-lg);
  }

  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--spacing-base));
  align-items: stretch;

  max-width: var(--app-max-width);
  min-height: 100%;
  padding-block-start: var(--spacing-base);
  padding-block-end: calc(3 * var(--spacing-base));
  padding-inline: var(--app-padding-inline);
  margin: 0 auto;
`;

/**
 * Blocking script for first-time visitors with system dark mode preference.
 *
 * For returning visitors, SSR reads the theme cookie and renders the correct theme.
 * But first-time visitors have no cookie yet, so SSR defaults to light theme.
 *
 * This script runs before paint to:
 * 1. Detect system preference (prefers-color-scheme: dark)
 * 2. Set data-theme attribute immediately (prevents flash of light theme)
 * 3. Set cookie so subsequent page loads use SSR
 */
const blockingThemeScript = `(function() {
  const match = document.cookie.match(new RegExp('(^| )' + ${CookieName.THEME} + '=([^;]+)'));
  const persistedTheme = match ? match[2] : null;

  if (persistedTheme === '${ColorTheme.LIGHT}' || persistedTheme === '${ColorTheme.DARK}') {
    return; // Cookie exists, SSR already rendered correct theme
  }

  // First-time visitor: check system preference
  const prefersDark =
    'matchMedia' in window && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? '${ColorTheme.DARK}' : '${ColorTheme.LIGHT}';

  if (theme === '${ColorTheme.DARK}') {
    document.documentElement.setAttribute('${DataAttribute.THEME}', '${ColorTheme.DARK}');
  }

  // Set cookie for subsequent SSR
  document.cookie = '${CookieName.THEME}=' + theme + '; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax';
})()
`;
