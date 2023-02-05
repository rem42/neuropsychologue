import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement} from 'react';

export interface TwoColumnWithImageProps {
  content: {
    title: string;
    description: string[];
    button?: {
      text: string;
      to: string;
    };
  };
  image: string;
  reverse?: boolean;
}

const TwoColumnWithImage: FC<TwoColumnWithImageProps> = ({content, image, reverse}): ReactElement => {
  const classReverse = reverse ? ' flex-row-reverse' : '';
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container md:w-3/4 px-5 mx-auto">
          <div className={'flex flex-wrap' + classReverse}>
            <div className="md:px-12 md:w-2/3 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{content.title}</h2>
              {content.description.map((description, index) => (
                <div key={index} className="leading-relaxed mb-8" dangerouslySetInnerHTML={{__html: description}} />
              ))}
              {content.button && (
                <Link
                  to={content.button.to}
                  className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded"
                >
                  {content.button.text}
                </Link>
              )}
            </div>
            <div className="px-12 md:w-1/3 flex flex-col items-start">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                {/*<StaticImage alt='' className="w-48 m-auto flex-shrink-0 rounded" src={image} />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoColumnWithImage;
