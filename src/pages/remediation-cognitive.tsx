import {StaticImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement} from 'react';

import TwoColumnWithImage from '@components/Block/TwoColumnWithImage';
import HeaderSimple from '@components/Header/HeaderSimple';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import {Seo} from '@components/Seo';

const RemediationCognitivePage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="La remédiation cognitive" />
        <Paragraph
          {...{
            title: "Qu'est-ce-que la remédiation cognitive ?",
            text:
              '<p>De multiples études ont mis en exergue l’impact des troubles cognitifs sans le quotidien et dans l’expression des symptômes de la maladie (cf. bilan neuropsychologique).</p>' +
              '<p>À l’issue de bilan, des séances de remédiation cognitive peuvent être proposée. Le protocole de rééducation est élaboré en fonction des troubles mis en exergue dans le bilan.</p>' +
              '<p>Cette prise en charge n’est pas obligatoire et elle est proposée à tout âge. Elle peut être proposée de différentes manières en fonction du degré de sévérité et de l’origine des troubles. Consensus universel, l’effet de la rééducation est en lien avec la fréquence. Dans ce sens, l’ensemble des prises en charge de rééduation sont associés à un programme de rééducation via un site internet, sauf dans quelques cas spécifique. Dont la supervision, le suivi et l’adaptation du programme est réalisée par mes soins :</p>',
          }}
        />
        <TwoColumnWithImage
          {...{
            content: {
              title: "Qu'est-ce-que la remédiation cognitive ?",
              description: [
                '<ul role="list" class="marker:text-sky-400 list-disc pl-5 pt-5 text-slate-500 text-left">' +
                  '<li>Des séances d’une heure et de préférence toutes les semaines pour optimiser la récupération.</li>' +
                  '<li>Des séances d’une heure et de préférence toutes les semaines pour optimiser la récupération associé au programme internet</li>' +
                  '<li>Réalisation d’exercices sur internet avec un suivi à distance par le neuropsychologue sur votre session personnalisée avec une prise en charge toutes les deux semaines avec la neuropsychologue (à domicile ou au cabinet) </li>' +
                  '</ul>',
              ],
            },
            image: (
              <StaticImage alt="" className="w-48 m-auto flex-shrink-0 rounded" src={'../images/remediation.jpg'} />
            ),
          }}
        />
      </Layout>
    </>
  );
};

export default RemediationCognitivePage;
export const Head = () => (
  <Seo
    title="Remédiation cognitive enfants et adultes à Lyon, Brignais"
    description="La remédiation cognitive est une prise en charge qui permet de rééduquer les troubles cognitifs. Elle est proposée à tout âge et peut être réalisée de différentes manières."
  />
);
