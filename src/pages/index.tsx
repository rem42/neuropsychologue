import type {HeadFC, PageProps} from 'gatsby';
import * as React from 'react';

import CardInfoFullColor from '@components/Card/CardInfoFullColor';
import HeaderHome from '@components/Header/HeaderHome';
import Hero2 from '@components/Hero/Hero2';
import InfoAreaIconTitleList from '@components/InfoAreas/Misc/InfoAreaIconTitleList';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import {Seo} from '@components/Seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <HeaderHome
          props={{
            title: 'Cabinet de Neuropsychologie',
            subtitle: 'Libéral - Pluridisciplinaire',
            button: 'Home',
            jobs: [
              {
                name: 'Lauralee HEBERT',
                title: 'Psychologue-Neuropsychologue',
              },
              {
                name: 'Solène LABOUCHE',
                title: 'Psychologue-Neuropsychologue',
              },
              {
                name: 'Radja DOUAR',
                title: 'Psychologue-Neuropsychologue',
              },
            ],
          }}
        />
        <div className="w-full md:w-8/12 mx-auto mt-20">
          <InfoAreaIconTitleList
            {...{
              icon: 'fas fa-question',
              color: 'lightBlue',
              title: "Qu'est-ce-que la neuropsychologie ?",
              description:
                'La neuropsychologie est la branche scientifique de la psychologie qui étudie les liens entre le fonctionnement du cerveau et le comportement. Chaque région cérébrale va être engagée de manière spécifique dans notre quotidien, tel que :',
              list: [
                {icon: 'fas fa-check', text: 'Organiser sa journée'},
                {icon: 'fas fa-check', text: 'Rester concentrer sur une activité'},
                {icon: 'fas fa-check', text: 'Suivre une discussion'},
                {icon: 'fas fa-check', text: 'Reconnaître les émotions'},
                {icon: 'fas fa-check', text: 'S’adapter à des situations inconnues'},
                {icon: 'fas fa-check', text: 'Ne pas se faire distraire'},
                {icon: 'fas fa-check', text: '...'},
              ],
            }}
          />
        </div>
        <Hero2
          {...{
            image: '../../images/bulb-brain.png',
            infoArea: {
              icon: 'fas fa-lightbulb',
              color: 'lightBlue',
              title: 'Les perturbations cognitives',
              description:
                'Les perturbations cognitives, d’origine lésionnelle, thymique, psychiatrique ou neurodéveloppementale, vont engendrer des modifications fonctionnelles. Ces perturbations vont impacter votre quotidien de différentes manières :',
              list: [
                {icon: 'fas fa-check', text: 'Difficultés à s’orienter dans le temps'},
                {icon: 'fas fa-check', text: 'Se repérer dans l’espace'},
                {icon: 'fas fa-check', text: 'Difficultés de comportement'},
                {icon: 'fas fa-check', text: 'Difficultés de concentration'},
                {icon: 'fas fa-check', text: 'Difficultés pour apprendre des cours ou des oublisé'},
                {icon: 'fas fa-check', text: 'Des comportements peu adaptés'},
                {icon: 'fas fa-check', text: 'De l’impulsivité'},
                {icon: 'fas fa-check', text: '...'},
              ],
            },
          }}
        />
        <Paragraph text="L’objectif du bilan neuropsychologique est de mettre en lumière l’origine des difficultés que vous ressentez dans votre quotidien. En effet, un même symptôme — <b>« JE N’ARRIVE PAS À ME CONCENTRER »</b> peut avoir plusieurs origines sans être, obligatoirement, un trouble de l’attention." />
        <section className="w-full md:w-8/12 mx-auto px-6">
          <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">
            Dans ce sens, le neuropsychologue a deux grandes missions principales :
          </h2>
          <div className="md:columns-2 mt-20 space-y-4">
            <CardInfoFullColor
              {...{
                color: 'lightBlue',
                icon: 'fas fa-smile-beam',
                title: 'Le diagnostic',
                description:
                  'identification du déficit, analyse, mécanismes compensatoires, retentissement au quotidien, impact de la sphère émotionnelle, impact du moral (traumatisme, émotion..) sur les aptitudes cognitives ...',
                gradient: false,
              }}
            />
            <CardInfoFullColor
              {...{
                color: 'lightBlue',
                icon: 'fas fa-smile-beam',
                title: 'La prise en charge',
                description:
                  'rééducation, réadaptation, développement de compensation, information, réinsertion sociale/scolaire/professionnelle, etc.',
                gradient: false,
              }}
            />
          </div>
        </section>
        <Paragraph
          text="Cette approche nécessite une stricte connaissance de l’anatomie/fonctionnement du cerveau, de
l’impact de la sphère psychologique et des modèles cognitifs."
        />
        <div className="w-full md:w-8/12 mx-auto mt-20">
          <InfoAreaIconTitleList
            {...{
              icon: 'fas fa-question',
              color: 'lightBlue',
              title: 'Chez l’enfant et l’adolescent : leur scolarité et leur vie sociale',
              description:
                'La mise en lumière des difficultés permettra une meilleure prise en charge afin qu’il puisse poursuivre son cursus scolaire dans de bonnes conditions et avec des aides appropriées.',
            }}
          />
        </div>
        <div className="w-full md:w-8/12 mx-auto mt-20">
          <InfoAreaIconTitleList
            {...{
              icon: 'fas fa-question',
              color: 'lightBlue',
              title: 'Adultes & personnes âgées',
              description: [
                'Chez l’adulte et la personne âgée : la conduite automobile, la vie professionnelle et la vie personnelle.',
                'Il est à noter que cette évaluation permet de différencier des troubles dus à un vieillissement normal ou pathologique (personne âgée), d’une origine lésionnel (AVC) ainsi que le suivi de l’évolution d’une maladie neurodégénérative (adulte et personne âgée).',
              ],
            }}
          />
        </div>
        <Paragraph
          title="Prise en charge personnalisée"
          text="<p>Cette pratique repose sur un examen clinique rigoureux qui va permettre la mise en lumière de l’origine de vos difficultés.

Le bilan neuropsychologique se réalise en 3 étapes qui représente l’état de « diagnostic » :

Un premier entretien afin de discuter et recueillir un maximum d’informations sur les difficultés.
La réalisation du bilan neuropsychologique et psychométrique au cours d’un ou plusieurs rendez-vous à l’aide d’outils normalisés.
La restitution orale du bilan avec remise en main propre du compte-rendu.
Étape primordiale, puisqu’elle va permet la personnalisation de la « prise en charge  » qui va en découler.</p>"
        />
      </Layout>
    </>
  );
};

export default IndexPage;
export const Head = () => (
  <Seo
    title="Neuropsychologue Lyon et Brignais | Lauralee HÉBERT"
    description="Présentation de la neuropsychologie pour les enfants, adolescents, adultes et personnes âgées, de difficultés de concentrations, de mémoires, de comportements, de la gestion des émotions, des apprentissages, de l'anxiété à Lyon et Brignais."
  />
);
