import {StaticImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement} from 'react';

import Layout from '@app/components/Layout';

import TwoColumnWithImage from '@components/Block/TwoColumnWithImage';
import CardInfoIconLeft from '@components/Card/CardInfoIconLeft';
import HeaderSimple from '@components/Header/HeaderSimple';
import Heading2Badge from '@components/Heading/Heading2Badge';
import Paragraph from '@components/Paragraph/Paragraph';
import {Seo} from '@components/Seo';
import Skew from '@components/Skew/Skew';

const props = {
  cards: [
    {
      icon: 'fas fa-people-group',
      color: 'lightBlue',
      title: 'La première rencontre : Entretien anamnestique',
      description:
        '<p>Celui-ci permet de récolter un maximum d’informations sur l’ensemble des difficultés rencontrées, dans le but de vous proposer une prise en charge adaptée.</p>' +
        '<p><b>ATTENTION !</b> Il est nécessaire d’apporter les documents suivants :</p>' +
        '<ul class="list-disc ml-4">' +
        '<li>Bilan médicaux / hospitalisation et paramédicaux</li>' +
        '<li>Liste des traitements en cours</li>' +
        '<li>Carnet de santé et bulletins scolaire (enfant)</li>' +
        '</ul>',
    },
    {
      icon: 'fas fa-ranking-star',
      color: 'orange',
      title: 'La seconde étape : réalisation du bilan neuropsychologique',
      description:
        '<p>Suite à notre premier entretien, plusieurs rendez-vous seront planifiés pour réaliser l’évaluation (nombre de tests et fatigue).</p>',
    },
    {
      icon: 'fas fa-book',
      color: 'red',
      title: 'La troisième étape: restitution du bilan',
      description:
        '<p>Celle-ci permet de faire le point sur l’ensemble des éléments mis en exergue au cours du bilan neuropsychologique (fonctions cognitives déficitaires et mécanismes préservés). À l’issue de cet entretien, des orientations vers d’autres professionnels ou/et des séances de remédiation peuvent être proposées.</p>',
    },
    {
      icon: 'fas fa-trophy',
      color: 'emerald',
      title: 'La quatrième étape : séance de remédiation',
      description:
        '<p>Ces séances, basées sur les difficultés objectivées par le bilan, ont pour but de travailler sur des faiblesses à l’aide d’exercices ou de jeux.</p>',
    },
  ],
  color: 'purple',
};

const BilanNeuropsychologiquePage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Pourquoi un bilan neuropsychologique ?" titleSize="text-4xl" />
        <Paragraph text="<p><strong>Le bilan neuropsychologique</strong> a pour objectif de mettre en lumière <u>les mécanismes cognitives à l’origine des difficultés</u>, constatés par le patient ou son entourage,  et ainsi aider au diagnostic.</p>" />
        <TwoColumnWithImage
          {...{
            content: {
              title: 'Enfant / adolescent',
              description: [
                '<ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">' +
                  '<li>Des difficultés de mémoire.</li>' +
                  '<li>Des difficultés exécutives (une lenteur dans la réalisation de ses devoirs ou tâche à la maison, des difficultés à s’organiser dans ses leçons/devoirs, il perd le fil de ses idées…).</li>' +
                  '<li>Suspicion de Haut Potentiel Intellectuel (surdoué) ou une déficience intellectuelle.</li>' +
                  '<li>Trouble du comportement : manque de relations sociales, comportement répétitif/stéréotypé, impulsif, agressif ou souvent en colère.</li>' +
                  '<li>Trouble des apprentissages (dysphasie, dyscalculie, dysorthographie, dysgraphie, dyslexie, dyspraxie…).</li>' +
                  '<li>Pathologie neurologie (traumatisme crânien, épilepsie, tumeur…) ou syndrome épileptique.</li>' +
                  '</ul>',
              ],
            },
            reverse: true,
            image: (
              <StaticImage alt="" className="w-48 m-auto flex-shrink-0 rounded" src={'../images/fille-garcon.png'} />
            ),
          }}
        />
        <Paragraph
          {...{
            text:
              '<p>Si votre enfant présente l’un de ces symptômes, le bilan neuropsychologique aura pour objectif de comprendre l’origine des difficultés cognitifs. Dans ce sens, l’investigation permet :</p>' +
              '<ul role="list" class="marker:text-sky-400 list-disc pl-5 pt-5 text-slate-500 text-left">' +
              '<li>D’aider au diagnostic d’une pathologie ou d’un trouble des apprentissages</li>' +
              '<li>De surveiller l’évolution des troubles</li>' +
              '<li>De relever les effets des traitements médicamenteux et des pathologies neurologiques sur son développement.</li>' +
              '<li>De mettre en place des relais avec d’autres professionnels pour optimiser la prise en charge des difficultés de votre enfant.</li>' +
              '<li>De préconisation de stratégies basées sur ses points forts pour limiter l’impact des difficultés dans son quotidien (scolaire et personnel)</li>' +
              '<li>De mettre en place des séances de rééducation</li>' +
              '<li>Demande d’aide au quotidien (MDPH, demande d’AVS, tiers temps, PAP, etc.)</li>' +
              '</ul>' +
              '<blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 text-left">Je travaille en étroite collaboration avec l’ensemble des professionnels qui prennent en charge votre enfant (école, corps médical, orthophoniste…). Cette approche pluridisciplinaire permet une prise en charge personnalisée et spécifique, afin de vous proposer des adaptations/conduites à tenir pour améliorer ses apprentissages ainsi que son quotidien.</blockquote>',
          }}
        />
        <TwoColumnWithImage
          {...{
            content: {
              title: 'Adulte / personne âgée',
              description: [
                '<ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">' +
                  '<li>Suspicion de Haut Potentiel Intellectuel (surdoué) ou une déficience intellectuelle.</li>' +
                  '<li>Trouble du comportement : manque de relations sociales, comportement répétitif/stéréotypé, impulsif, agressif ou souvent en colère.</li>' +
                  '<li>Trouble des apprentissages (dysphasie, dyscalculie, dysorthographie, dysgraphie, dyslexie, dyspraxie …).</li>' +
                  '<li>Difficultés de mémoire, d’attention, apparition d’une grande irritabilité …</li>' +
                  '<li>' +
                  'Pathologies neurologies :' +
                  '<ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">' +
                  '<li>Lésions cérébrales acquises (traumatisme crânien, épilepsie, exérèse de tumeurs cérébrale …)</li>' +
                  '<li>Lésions cérébrales évolutives (maladie Alzheimer, chorée de Huntington, DFT, sclérose en plaques, etc.)</li>' +
                  '<li>Syndrome épileptique.</li>' +
                  '<li>Surveiller l’évolution d’une maladie neurodégénérative ou une récidive d’une tumeur cérébrale.</li>' +
                  '</ul>' +
                  '</li>' +
                  '<li>Pathologie psychiatrique (anxiété, dépression, bipolaires …)</li>' +
                  '<li>Aptitude à la conduite automobile ou reprise/réorientation professionnelle à la suite d’une atteinte neurologique.</li>' +
                  '</ul>',
              ],
            },
            /*image: <StaticImage alt='' className="w-48 m-auto flex-shrink-0 rounded" src={'../images/fille-garcon.png'} />,*/
          }}
        />
        <Paragraph
          {...{
            text:
              '<p>Si vous ou votre proche présentez l’une de ces problématiques, le bilan neuropsychologique aura pour objectif de comprendre l’origine des difficultés cognitifs. Dans ce sens, l’investigation permet :</p>' +
              '<ul role="list" class="marker:text-sky-400 list-disc pl-5 pt-5 text-slate-500 text-left">' +
              '<li>La mise en place de relais avec d’autres professionnels pour optimiser votre prise charge.</li>' +
              '<li>Des séances de remédiation (rééducation) ou de réadaptation (stratégie compensatoire).</li>' +
              '<li>La surveillance de l’évolution des troubles cognitifs.</li>' +
              '<li>Démarche avec l’assistance social de secteur pour la mise en place d’aide ou de sauvegarde de justice.</li>' +
              '<li>Difficultés cognitives à la suite d’un AVC ou d’un traumatisme crânien (procédure judiciaire).</li>' +
              '</ul>' +
              '<blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 text-left">Je travaille en étroite collaboration avec l’ensemble des professionnels qui vous prend en charge (corps médical, orthophoniste…). Cette approche pluridisciplinaire permet une prise en charge personnalisée et spécifique, afin de vous proposer des adaptations/conduites à tenir pour améliorer votre quotidien.</blockquote>',
          }}
        />
        <Skew color="text-slate-800" />
        <div
          className="relative bg-slate-800 text-center py-20"
          style={{backgroundImage: 'url(/notus-pro-react/static/media/p31.8a674f45.svg)'}}
        >
          <div className="container mx-auto px-4">
            <Heading2Badge
              {...{
                title: 'Les différentes étapes de la réalisation d’un bilan neuropsychologique',
                description: '',
                alignment: 'center',
                whiteContent: true,
              }}
            />
            <div className="mt-12 flex flex-wrap items-center -mx-4">
              {props.cards.map((prop, key) => (
                <div key={key} className="p-4 relative w-full lg:w-6/12">
                  <CardInfoIconLeft {...prop} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Skew background="bg-slate-800" color="text-white" />
      </Layout>
    </>
  );
};

export default BilanNeuropsychologiquePage;
export const Head = () => (
  <Seo
    title="Bilan neuropsychologique enfants et adultes à Lyon, Brignais"
    description="Le bilan neuropsychologique permet de comprendre les difficultés cognitives et de mettre en place des stratégies adaptées."
  />
);
