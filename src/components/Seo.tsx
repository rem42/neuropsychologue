import React, {FC, ReactElement} from 'react';

import {useSiteMetadata} from '../hooks/use-site-metadata';
import {graphql, useStaticQuery} from "gatsby";

export const Seo: FC<{title?: string; description?: string; pathname?: string; children?: ReactElement}> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {title: defaultTitle, description: defaultDescription, siteUrl, image} = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link
        rel="icon"
        href={image}
      />
      {children}
    </>
  );
};
