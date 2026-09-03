import { z } from "zod";

export type MDXFile<TFrontmatterData = FrontmatterData> = {
  segment: string;
  frontmatter: TFrontmatterData;
};

export type MDXParseResult<TFrontmatterData = FrontmatterData> = {
  frontmatter: TFrontmatterData;
  collectedHrefs: string[];
  collectedHeadings: Heading[];
};

export const schema_listingFrontmatterData = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
});
export type ListingFrontmatterData = z.infer<typeof schema_listingFrontmatterData>;

export const schema_frontmatterData = schema_listingFrontmatterData.extend({
  published: z.boolean(),
  publishedAtISO: z.string(),
  lastUpdatedAtISO: z.string().optional(),
  giscusTerm: z.string(),
});
export type FrontmatterData = z.infer<typeof schema_frontmatterData>;

export type Heading = {
  text: string;
  id: string;
  level: HeadingLevel;
};
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
