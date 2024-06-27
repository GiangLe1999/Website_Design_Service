/* eslint-disable react/display-name */
import { coreContent } from "@/lib/content-layer";
import type { Authors, Blog } from "@/.contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "./custom-image";
import CustomLink from "./custom-link";
import LinkButton from "./custom-link-button";
import Pre from "./pre";
import TOCInline from "./toc-inline";

interface MDXLayout {
  content: Blog | Authors;
  [key: string]: unknown;
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  LinkButton,
};

export const MDXLayoutRenderer = ({ content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout content={mainContent} components={components} {...rest} />;
};
