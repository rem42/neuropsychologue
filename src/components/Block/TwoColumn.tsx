import {Link} from 'gatsby';
import React, {FC, Fragment, ReactElement} from 'react';

import HeaderSimple from '@components/Header/HeaderSimple';

export interface TwoColumnProps {
  firstColumn: {
    title: string;
    description: string[];
    button: {
      text: string;
      to: string;
    };
  };
  secondColumn: {
    title: string;
    list: {
      text: string;
      icon: string;
    }[];
  };
}

const TwoColumn: FC<TwoColumnProps> = ({firstColumn, secondColumn}): ReactElement => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {firstColumn.title}
              </h2>
              {firstColumn.description.map((description, index) => (
                <p key={index} className="leading-relaxed mb-8">
                  {description}
                </p>
              ))}
              <Link
                to={firstColumn.button.to}
                className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded"
              >
                {firstColumn.button.text}
              </Link>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {secondColumn.title}
              </h2>
              {secondColumn.list.map((list, index) => (
                <p key={index} className="leading-relaxed mb-2">
                  <i className={list.icon + ' mr-4'}></i>
                  <span dangerouslySetInnerHTML={{__html: list.text}} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoColumn;
