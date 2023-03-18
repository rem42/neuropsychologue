import {HeadFC, PageProps} from 'gatsby';
import * as React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
  const image = '../images/404.svg';
  const color = 'blueGray';
  const error = '404';
  const title = 'Page non trouvée :(';
  const description = "Oups ! On dirait que tu t'es perdu.";
  const colors = {
    light: 'text-blueGray-100',
    dark: 'text-blueGray-800',
    blueGray: 'text-blueGray-500',
    red: 'text-red-500',
    orange: 'text-orange-500',
    amber: 'text-amber-500',
    emerald: 'text-emerald-500',
    teal: 'text-teal-500',
    lightBlue: 'text-lightBlue-500',
    indigo: 'text-indigo-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
  };
  const className = 'font-bold text-10 sm:text-12 tracking-875 ' + colors[color];
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div
          className="absolute bg-cover bg-50 h-full w-full"
          style={{
            backgroundImage: 'url(' + image + ')',
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-wrap -mx-4 h-full items-center">
            <div className="text-center px-4 relative w-full">
              <h1 className={className}>{error}</h1>
              <h4 className="text-3xl font-bold mb-2 mt-0">{title}</h4>
              <p className="text-2xl font-normal leading-normal text-blueGray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
