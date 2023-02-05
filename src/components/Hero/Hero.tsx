import React, {FC, ReactElement} from 'react';

import InfoAreaIconTitleList from '../InfoAreas/Misc/InfoAreaIconTitleList';

const Hero: FC = (): ReactElement => {
  const infoArea = {
    icon: 'fas fa-question',
    color: 'lightBlue',
    title: "Qu'est-ce-que la neuropsychologie ?",
    description:
      'La neuropsychologie est la branche scientifique de la psychologie qui étudie les liens entre le fonctionnement du cerveau et le comportement. Chaque région cérébrale va être engager de manière spécifiques dans notre quotidien, tel que :',
    list: [
      {icon: 'fas fa-check', text: 'Organiser sa journée'},
      {icon: 'fas fa-check', text: 'Rester concentrer sur une activité'},
      {icon: 'fas fa-check', text: 'Suivre une discussion'},
      {icon: 'fas fa-check', text: 'Reconnaître les émotions'},
      {icon: 'fas fa-check', text: 'S’adapter à des situations inconnues'},
      {icon: 'fas fa-check', text: '...'},
    ],
  };
  return (
    <>
      <div className="w-full md:w-8/12 mx-auto mt-20">
        <InfoAreaIconTitleList {...infoArea} />
      </div>
    </>
  );
};

export default Hero;
