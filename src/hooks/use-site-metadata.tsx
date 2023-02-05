import {graphql, useStaticQuery} from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      image: file(absolutePath: {regex: "/favicon/"}) {
        publicURL
      }
    }
  `);
  return {...data.site.siteMetadata, image: data.image.publicURL};
};
