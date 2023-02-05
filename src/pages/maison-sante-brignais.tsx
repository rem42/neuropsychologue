import React, {FC, ReactElement} from 'react';

import TwoColumn from '@components/Block/TwoColumn';
import HeaderSimple from '@components/Header/HeaderSimple';
import ImageBrignais from '@components/Image/ImageBrignais';
import Layout from '@components/Layout';
import Map from '@components/Map/Map';
import {Seo} from '@components/Seo';

const BringaisPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Maison de Santé de Brignais" />
        <TwoColumn
          firstColumn={{
            title: 'Une maison de santé pluridisciplinaire',
            description: [
              'Le cabinet vous accueille dans le confort de ses installations qui vous permettent de vous détendre pour passer les tests cognitifs ou de suivre les séances de remédiation en toute quiétude.',
            ],
            button: {
              text: 'Consulter les tarifs',
              to: '/tarifs',
            },
          }}
          secondColumn={{
            title: 'Se déplacer à la maison de santé',
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
        <ImageBrignais />
        <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52589.396200782205!2d4.717460589329541!3d45.66903294315405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4efa11905eb7d%3A0x734dd5a079cf4356!2sCabinet%20de%20neuropsychologie%20-%20H%C3%89BERT%20Lauralee!5e0!3m2!1sfr!2sfr!4v1674760787180!5m2!1sfr!2sfr" />
      </Layout>
    </>
  );
};

export default BringaisPage;
export const Head = () => (
  <Seo
    title="Maisons de santé à Brignais"
    description="Le cabinet de neuropsychologie de Lauralee Hébert est situé dans la maison de santé de Brignais, à proximité de Lyon."
  />
);
