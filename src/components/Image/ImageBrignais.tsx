import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage, StaticImage, getImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement} from 'react';

const ImageBrignais: FC = (): ReactElement => {
  const {images} = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {absolutePath: {regex: "/Brignais/"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `,
  );

  return (
    <>
      <div className="py-6">
        <div className="flex flex-wrap">
          {images.edges.map((image, index) => {
            const imageData = getImage(image.node.childImageSharp.gatsbyImageData);
            return (
              <div className="px-4 relative w-full lg:w-4/12 w-full md:w-6/12" key={index}>
                <div className="shadow rounded relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                  <div className="relative">
                    <GatsbyImage alt="" className="w-full flex-shrink-0 rounded" image={imageData!} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageBrignais;
