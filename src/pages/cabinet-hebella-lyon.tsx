import React, {FC, ReactElement} from 'react';

import TwoColumn from '@components/Block/TwoColumn';
import HeaderSimple from '@components/Header/HeaderSimple';
import ImageLyon from '@components/Image/ImageLyon';
import Layout from '@components/Layout';
import Map from '@components/Map/Map';
import {Seo} from "@components/Seo";

const LyonPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Cabinet HEBELLA" />
        <TwoColumn
          firstColumn={{
            title: 'Un cabinet agréable',
            description: [
              'Le cabinet vous accueille dans le confort de ses installations qui vous permettent de vous détendre pour passer les tests cognitifs ou de suivre les séances de remédiation en toute quiétude.',
            ],
            button: {
              text: 'Consulter les tarifs',
              to: '/tarifs',
            },
          }}
          secondColumn={{
            title: 'Se déplacer au cabinet',
            list: [
              {
                text: '<b>Métro</b> : ligne B, arrêt Guichard ou arrêt Saxe-Gambetta; ligne D, arrêt Garibaldi et arrêt Saxe-Gambetta.',
                icon: 'fas fa-train-subway',
              },
              {
                text: '<b>Bus</b> : ligne C4, C12, C14 - saxe gambetta, C7 Garibaldi gambetta, C9 et C 13 - Part-Dieu Renaudel, C11 - Abondance, C 15 - Rancy, bus 25',
                icon: 'fas fa-bus',
              },
              {
                text: '<b>Tramway</b> : ligne T1, arrêt palais de justice Mairie 3e',
                icon: 'fas fa-train-tram',
              },
              {
                text: '<b>Voiture</b> : Places disponibles à proximité du cabinet',
                icon: 'fas fa-car',
              },
            ],
          }}
        />
        <ImageLyon />
        <Map url="https://maps.google.com/maps?q=Lauralee%20H%C3%A9bert&t=m&z=10&output=embed&iwloc=near" />
      </Layout>
    </>
  );
};

export default LyonPage;
export const Head = () => <Seo
  title='Cabinet Hebella neuropsychologue à Lyon'
  description='Le cabinet vous accueille dans le confort de ses installations qui vous permettent de vous détendre pour passer les tests cognitifs ou de suivre les séances de remédiation en toute quiétude.'
/>;

