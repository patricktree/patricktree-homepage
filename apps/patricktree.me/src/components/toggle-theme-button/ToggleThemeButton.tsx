'use client';

import { styled } from '@pigment-css/react';
import type React from 'react';
import { Moon, Sun } from 'react-feather';

import { Classes, ColorTheme, DataAttribute, LocalStorageKey } from '#pkg/constants-browser.js';
import { IconButton } from '#pkg/elements/index.js';

const iconSize = 20;

export const ToggleThemeButton: React.FC = () => {
  return (
    <ToggleThemeIconButton
      onClick={toggleColorTheme}
      className={Classes.JS_REQUIRED}
      style={{
        '--icon-size': `${iconSize}px`,
      }}
      aria-label="toggle light/dark theme"
    >
      <CentralFixedSizeDiv>
        <IconStack>
          <StackedSun width={iconSize} height={iconSize} />
          <StackedMoon width={iconSize} height={iconSize} />
        </IconStack>
      </CentralFixedSizeDiv>
    </ToggleThemeIconButton>
  );
};

function toggleColorTheme() {
  const activeColorTheme =
    document.documentElement.getAttribute(DataAttribute.THEME) === ColorTheme.DARK
      ? ColorTheme.DARK
      : ColorTheme.LIGHT;
  const newTheme = activeColorTheme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT;

  // Set theme as data-attribute to apply new CSS Variables
  if (newTheme === ColorTheme.DARK) {
    document.documentElement.setAttribute(DataAttribute.THEME, ColorTheme.DARK);
  } else {
    document.documentElement.removeAttribute(DataAttribute.THEME);
  }

  // Persist theme
  localStorage.setItem(LocalStorageKey.THEME, newTheme);
}

const ToggleThemeIconButton = styled(IconButton)`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  height: 100%;
  padding-block-start: calc(var(--header-content-padding-block-start) + 4px);
  padding-block-end: var(--header-content-padding-block-end);
  padding-inline: calc(1 * var(--spacing-base));
`;

const CentralFixedSizeDiv = styled('div')`
  position: relative;

  display: grid;
  place-items: center;
  width: var(--icon-size);
  height: var(--icon-size);

  overflow: hidden;
`;

const IconStack = styled('div')`
  --icon-stack-spacing: 8px;

  position: absolute;

  top: 0;
  left: 0;
  display: grid;
  grid-template-areas:
    'moon'
    'spacer'
    'sun';
  grid-template-rows: 1fr var(--icon-stack-spacing) 1fr;
  place-items: center;
  width: calc(100%);
  height: calc(200% + var(--icon-stack-spacing));

  transition: transform 500ms;

  *:root[${DataAttribute.THEME}='${ColorTheme.DARK}'] && {
    transform: translateY(calc(-1 * 50% - 0.5 * var(--icon-stack-spacing)));
  }
`;

const StackedSun = styled(Sun)`
  grid-area: sun;
`;

const StackedMoon = styled(Moon)`
  grid-area: moon;
`;
