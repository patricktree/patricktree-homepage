import { styled } from '@pigment-css/react';

import { merriweather } from '#pkg/app/fonts.jsx';
import { Image } from '#pkg/elements/Image.jsx';
import { Anchor } from '../elements';

const HeadingRoot = styled.h1`
  scroll-margin-block-start: var(--header-height);
`;

export const Heading: React.FC<
  React.ComponentPropsWithoutRef<'h1'> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
> = ({ as, children, className, ...delegated }) => {
  return (
    <HeadingRoot
      as={as}
      {...delegated}
      className={[className, merriweather.className].filter(Boolean).join(' ')}
    >
      {children}
    </HeadingRoot>
  );
};

export const PageArticle = styled.article`
  max-width: var(--app-box-width);
  padding-block: 32px;
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
`;

export const BackLinkParagraph = styled.p`
  margin-block-start: 2em;
`;

export const BacklinkAnchor = styled(Anchor)`
  display: flex;
  gap: calc(0.5 * var(--spacing-base));
  align-items: center;
`;

export const AboutImageContainer = styled.div`
  position: relative;
  height: 400px;
  margin-inline: calc(-1 * var(--section-padding-inline));

  container-type: size;
  container-name: image-container;
`;

export const AboutImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 50%;

  @container image-container (aspect-ratio > 1.10) {
    object-position: 50% 40%;
  }

  @container image-container (aspect-ratio > 1.25) {
    object-position: 50% 25%;
  }
`;
