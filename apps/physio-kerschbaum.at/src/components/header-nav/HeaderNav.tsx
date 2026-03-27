import { css } from '@pigment-css/react';
import type React from 'react';
import { Instagram } from 'react-feather';

import { headingIds } from '#pkg/app/page-constants.js';
import logo from '#pkg/assets/logo.png';
import { OpenSidenavButton } from '#pkg/components/sidenav/index.js';
import { Anchor } from '#pkg/elements/Anchor.jsx';
import { Image } from '#pkg/elements/Image.jsx';

const LOGO_HEIGHT = 32;

export const HeaderNav: React.FC = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        font-size: var(--menu-button-size);

        --menu-button-size: ${LOGO_HEIGHT}px;

        & > * {
          isolation: isolate;
        }
      `}
    >
      <a
        href="https://www.instagram.com/physio.kerschbaum?igsh=eWh5YXR5cW8yNXIw&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram - physio.kerschbaum"
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;

          width: var(--menu-button-size);
          height: var(--menu-button-size);
          padding: calc(0.75 * var(--spacing-base));

          color: var(--color-fg);
          background-color: var(--color-bg);
          border-radius: 9999px;
          box-shadow: var(--shadow-elevation-medium);
        `}
      >
        <Instagram size="0.75em" />
      </a>
      <Anchor href={`/#${headingIds.welcome}`}>
        <Image src={logo} alt="" height={LOGO_HEIGHT} />
      </Anchor>
      <OpenSidenavButton />
    </div>
  );
};
