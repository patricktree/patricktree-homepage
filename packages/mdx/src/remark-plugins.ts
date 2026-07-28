import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import { z } from "zod";

type CreateCollectHrefsFromJsxElementsPluginArgs = {
  hrefs: string[];
};

const schema_jsxHrefAttribute = z.object({
  type: z.literal("mdxJsxAttribute"),
  name: z.literal("href"),
  value: z.string().nonempty(),
});

export function createCollectHrefsFromJsxElementsPlugin({
  hrefs,
}: CreateCollectHrefsFromJsxElementsPluginArgs) {
  return function collectHrefsFromJsxElementsPlugin() {
    return (tree: Root) => {
      visit(tree, ["mdxJsxFlowElement", "mdxJsxTextElement"], (node) => {
        let hrefAttribute;
        // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- prop "attributes" exists but the mdast types do not include it
        for (const attribute of (node as any).attributes) {
          const parseResult = schema_jsxHrefAttribute.safeParse(attribute);
          if (parseResult.success) {
            hrefAttribute = parseResult.data;
          }
        }

        if (!hrefAttribute) {
          return;
        }

        hrefs.push(hrefAttribute.value);
      });
    };
  };
}
