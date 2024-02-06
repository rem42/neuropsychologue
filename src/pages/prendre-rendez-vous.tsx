import React, {FC, ReactElement} from 'react';

import CardProfileFull from '@components/Card/CardProfileFull';
import HeaderSimple from '@components/Header/HeaderSimple';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import {Seo} from '@components/Seo';
import Skew from '@components/Skew/Skew';

const PrendreRendezVousPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Besoin d'information ou d'un rendez-vous ?" />
        <Paragraph text="<p>Pour toute demande de rendez-vous ou si vous souhaitez obtenir plus d’informations, n’hésitez pas à contacter directement le practicien par téléphone ou à remplir ce formulaire avec votre message en indiquant vos coordonnées et nous reviendrons vers vous le plus rapidement possible.</p>" />
        <div>
          <Skew color="text-slate-300" />
          <div className="relative bg-slate-300 pt-12 pb-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-center lg:text-center justify-center">
                <div className="px-4 relative w-full lg:w-4/12 w-full md:w-4/12">
                  <CardProfileFull
                    title="Lauralee HÉBERT"
                    description="Psychologue - Neuropsychologue"
                    list={[
                      {icon: 'fas fa-map-marker-alt', text: 'Lyon & Brignais', color: 'lightBlue'},
                      {icon: 'fas fa-phone', text: '06 52 45 35 38', color: 'teal'},
                      {icon: 'fas fa-envelope', text: 'lhebert.neuropsychologue@gmail.com', color: 'indigo'},
                    ]}
                  />
                </div>
                <div className="px-4 relative w-full lg:w-4/12 w-full md:w-4/12">
                  <CardProfileFull
                    title="Solène LABOUCHE"
                    description="Psychologue - Neuropsychologue"
                    list={[
                      {icon: 'fas fa-map-marker-alt', text: 'Brignais', color: 'lightBlue'},
                      {icon: 'fas fa-phone', text: '06 47 93 12 40', color: 'teal'},
                      {icon: 'fas fa-envelope', text: 'neuropsy.labouche@gmail.com', color: 'indigo'},
                    ]}
                  />
                </div>
                <div className="px-4 relative w-full lg:w-4/12 w-full md:w-4/12">
                  <CardProfileFull
                    title="Radja DOUAR"
                    description="Psychologue - Neuropsychologue"
                    list={[
                      {icon: 'fas fa-map-marker-alt', text: 'Lyon', color: 'lightBlue'},
                      {icon: 'fas fa-phone', text: '06 70 21 82 67', color: 'teal'},
                      {icon: 'fas fa-envelope', text: 'rdouarneuropsychologue@gmail.com', color: 'indigo'},
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Skew background="bg-slate-300" color="text-white" />
      </Layout>
    </>
  );
};

export default PrendreRendezVousPage;
export const Head = () => (
  <Seo
    title="Prendre rendez-vous pour un bilan neuropsychologique"
    description="Prendre rendez-vous pour un bilan neuropsychologique à Lyon ou Brignais"
  />
);
