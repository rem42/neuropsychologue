import React, {FC, ReactElement} from 'react';

import InfoAreaIconTitleList from '../InfoAreas/Misc/InfoAreaIconTitleList';
import {StaticImage} from "gatsby-plugin-image";

const Hero2: FC<{
  image: string;
  infoArea: {
    icon: string;
    color: string;
    title: string;
    description: string | Array<string>;
    list?: Array<{icon: string; text: string}>;
  };
}> = ({image, infoArea}): ReactElement => {
  return (
    <>
      <section className="relative pb-20">
        <div className="container mx-auto px-4 pt-20 bg-white">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto">
              <StaticImage alt="..." className="max-w-full rounded-lg shadow-lg" src={'../../images/bulb-brain.png'} />
            </div>
            <div className="w-full md:w-6/12 ml-auto mr-auto">
              <div className="md:pr-12">
                <InfoAreaIconTitleList {...infoArea} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
