import { styled } from "@pigment-css/react";
import type { StaticImageData } from "next/image.js";
import type React from "react";

import type { ListingFrontmatterData, MDXFile } from "@patricktree-homepage/mdx/schema";

import { QUERIES } from "#pkg/constants-browser.js";
import { Description, Image, Tile, TileAnchor, TileContent, Title } from "#pkg/elements/index.js";

type ProjectTileProps = {
  project: MDXFile<ListingFrontmatterData>;
  href: string;
  image: StaticImageData;
  imageAlt: string;
};

export const ProjectTile: React.FC<ProjectTileProps> = ({ project, href, image, imageAlt }) => (
  <ProjectTileAnchor href={href}>
    <Tile>
      <ProjectImage
        src={image}
        alt={imageAlt}
        quality={100}
        sizes="(min-width: 800px) 388px, 100vw"
      />
      <ProjectTileContent>
        <Title>{project.frontmatter.title}</Title>
        <Description>{project.frontmatter.description}</Description>
        <TagsArea>
          {project.frontmatter.tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsArea>
      </ProjectTileContent>
    </Tile>
  </ProjectTileAnchor>
);

const ProjectTileAnchor = styled(TileAnchor)`
  width: 100%;

  /* stylelint-disable-next-line media-query-no-invalid -- works */
  @media ${QUERIES.tabletAndUp} {
    width: calc((100% - 3 * var(--spacing-base)) / 2);
  }
`;

const ProjectImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  border-bottom: 1px solid var(--color-fg);
`;

const ProjectTileContent = styled(TileContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TagsArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1 * var(--spacing-base));
  align-items: center;

  margin-block-start: 4px;
`;

const Tag = styled.li`
  padding: calc(0.5 * var(--spacing-base)) calc(1 * var(--spacing-base));

  font-size: var(--font-size-sm);
  white-space: pre;
  background-color: var(--color-bg-emphasized);
  border-radius: 4px;
`;
