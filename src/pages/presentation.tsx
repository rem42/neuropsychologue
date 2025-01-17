import React, {FC, ReactElement} from 'react';

import Education from '@components/Education/Education';
import HeaderSimple from '@components/Header/HeaderSimple';
import InfoAreaIconTitle from '@components/InfoAreas/InfoAreaIconTitle';
import Layout from '@components/Layout';
import {Seo} from '@components/Seo';

const PresentationPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Présentation" />
        <Education
          title="Lauralee HEBERT"
          subtitle="Psychologue - Neuropsychologue"
          jobs={[
            {
              title: 'Enseignante à la faculté de médecin à la faculté de médecin de Lyon Est',
              description: [
                'Formation : Master 1 Santé publique prcs Initiation à la recherche b',
                "RB39 Neurobiologie des processus d'apprentissage",
              ],
            },
            {
              title: 'Formatrice Catherine Lapsy',
              description: ["Trouble de l'attention et difficultés de concentration : Agir, Diagnostiquer et Comprendre"],
            },
            {
              title: 'Enseignante à l’université lumière à Lyon 2 – Neuropsychologie',
              description: ['Licence et master'],
            },
            {
              title: 'Formatrice – neurodiff',
              description: [
                'La précocité intellectuel – Haut potentiel',
                'Supervision – le WISC-V',
                "Bilan neuropsychologique et comportemental chez l'enfant - le WISC-V",
              ],
            },
            {
              title: 'Intervenante colloque « la dyslexie à l’âge adulte »',
              description: ['Approche neuropsychologique de la dyslexie adulte'],
            },
            {
              title: 'Colloque – séminaire',
              description: [
                'Trouble de l’attention avec/sans hyperactivité, Haut potentiel intellectuel, L’enjeu de la revalidation, neuropsychologie et troubles des apprentissages chez l’enfant, etc.',
              ],
            },
            {
              title:
                'Master en psychologie parcours neuropsychologie – Université  lumière de Lyon 2 / Université de Rouen',
              description: [
                'Mémoire : Analyse de l’impact de l’effet de familiarité sur la reconnaissance d’un stimuli visuel',
                'Mémoire : Analyse de mécanisme impliqués dans la reconnaissance des visages – étude électrophysiologique et comportementale',
              ],
            },
          ]}
          subDescription="Au cours de ma formation universitaire et de mon expérience professionnelle, j’ai acquis les aptitudes et les connaissances dans la prise en charge d’enfants, d’adolescents et d’adultes, souffrant de difficultés cognitives d’origines diverses : neurologiques ; psychiatriques ; développementales"
        />
        <div className="flex flex-wrap items-center mt-32 mb-32">
          <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
            <InfoAreaIconTitle
              title="Une prise en charge individualisée"
              description={[
                'Je réalise des prises en charge personnalisées (bilan et/ou remédiation) auprès d’enfants, d’adolescents, d’adultes et de personnes âgées. L’objectif d’une prise en charge est de comprendre par le biais d’un bilan neuropsychologique les perturbations cognitives qui engendre des difficultés au quotidien. Cette évaluation se réalise à l’aide de tests standardisés et de questionnaires adaptés à l’âge, au sexe et au niveau socioculturel du patient. A l’issue de celui-ci des conduites à tenir (aménagement du quotidien, aide, aménagement pédagogique, dossier MDPH etc.) sont préconisées pour limiter leurs impact et des séances de remédiation peuvent également être envisagées.',
              ]}
              icon="fas fa-person"
              iconColor="lightBlue"
            />
          </div>
        </div>
        {/*<Education
          title="Solène LABOUCHE"
          subtitle="Psychologue - Neuropsychologue"
          jobs={[
            {
              title: 'Formation de technicienne en hypnose Ericksonienne',
              description: [],
            },
            {
              title: 'Neuropsychologue en EHPAD',
              description: [],
            },
            {
              title: "Recherche sur l'apprentissage de la lecture chez les enfant porteur de la trisomie 21",
              description: [],
            },
            {
              title: 'HDJ des charpennes',
              description: ['Validation titre professionnel', 'Plus de 500h de stage'],
            },
            {
              title: 'Master 2 en psychologie cognitive des apprentissages – Université  lumière de Lyon 2',
              description: [
                'Trouble de l’attention avec/sans hyperactivité, Haut potentiel intellectuel, L’enjeu de la revalidation, neuropsychologie et troubles des apprentissages chez l’enfant, etc.',
              ],
            },
            {
              title: 'Master 1 en psychologie parcours neuropsychologie – Université  lumière de Lyon 2',
              description: [],
            },
          ]}
          subDescription=""
        />*/}
        <Education
          title="Florine PAILLASSE"
          subtitle="Psychologue - Neuropsychologue"
          jobs={[

          ]}
          subDescription=""
        />
      </Layout>
    </>
  );
};

export default PresentationPage;
export const Head = () => (
  <Seo
    title="Lauralee HEBERT - Psychologue - Neuropsychologue"
    description="Parcours scolaire et formation de Lauralee HEBERT - Psychologue - Neuropsychologue"
  />
);
