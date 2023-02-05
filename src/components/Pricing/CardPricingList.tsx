import React, {FC, ReactElement} from 'react';

import {PricingHeroInterface} from './PricingHeroInterface';

const CardPricingList: FC<PricingHeroInterface> = ({title, color, price, list}): ReactElement => {
  const colors = {
    slate: 'bg-slate-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    teal: 'bg-teal-500',
    lightBlue: 'bg-lightBlue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };
  return (
    <>
      <div
        className={
          colors[color] +
          ' pt-12 mb-6 text-center text-white shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 bg-contain bg-no-repeat bg-50-top'
        }
        style={{backgroundImage: "url('" + 'assets/img/bg_pricing5.svg' + "')"}}
      >
        <div className="mt-4 px-4 py-5 flex-auto">
          <h6 className="font-bold uppercase mb-2">{title}</h6>
          <div className="text-6xl font-bold leading-tight mt-0 mb-2">{price}</div>
          <ul className="my-6 mx-4 list-none">
            {list.map((prop, key) => (
              <li key={key} className="py-3 border-b border-black border-opacity-10">
                <b className="mr-2">{prop.title}</b>
                {prop.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardPricingList;
