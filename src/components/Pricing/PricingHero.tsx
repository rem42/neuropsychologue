import React, {FC, ReactElement} from 'react';

import CardPricingList from './CardPricingList';
import {PricingHeroInterface} from './PricingHeroInterface';

const PricingHero: FC<{cards: PricingHeroInterface[]}> = ({cards}): ReactElement => {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {cards.map((prop, key) => (
              <div key={key} className="px-4 relative w-full md:w-4/12">
                <CardPricingList {...prop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingHero;
