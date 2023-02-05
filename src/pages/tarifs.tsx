import React, {FC, ReactElement} from 'react';

import HeaderSimple from '@components/Header/HeaderSimple';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import PricingHero from '@components/Pricing/PricingHero';
import PricingList from '@components/Pricing/PricingList';
import {Seo} from "@components/Seo";

const TarifsPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Tarifs des consultations" />
        <Paragraph text="<p>Les consultations psychologiques et neuropsychologiques ne sont pas remboursées par la sécurité sociale. Cependant, certaines mutuelles proposent un remboursement. Renseignez-vous auprès de votre complémentaire santé.</p>" />
        <PricingHero
          cards={[
            {
              title: 'Bilan intellectuel',
              color: 'amber',
              price: '335 €',
              list: [
                {title: '60€', description: 'Entretien anamnestique'},
                {title: '275€', description: 'forfait du bilan intellectuel'},
                {title: 'Le / les séance·s', description: 'du bilan intellectuel'},
                {title: "l'entretien de restitution", description: ''},
                {title: 'Compte rendu', description: 'écrit'},
              ],
            },
            {
              title: 'Bilan neuropsychologique',
              color: 'teal',
              price: '460 €',
              list: [
                {title: '60€', description: 'Entretien anamnestique'},
                {title: '400€', description: 'forfait du bilan neuropsychologique'},
                {title: 'Les séances', description: 'du bilan cognitif & intellectuel'},
                {title: "l'entretien de restitution", description: ''},
                {title: 'Compte rendu', description: 'écrit'},
              ],
            },
            {
              title: 'Rééducation',
              color: 'emerald',
              price: '180€ / mois',
              list: [
                {title: '2', description: 'séances au cabinet'},
                {title: '60€', description: 'de logiciel en accès illimité'},
                {title: 'Supervision & adaptation', description: 'du logiciel'},
                {title: 'Guidance à la parentalité', description: ''},
                {title: 'Feedback', description: 'du trouble DYS dans le quotidien'},
              ],
            },
          ]}
        />
        <PricingList
          tableHead={['Prestation', 'Tarif']}
          tableBody={[
            {
              title: 'Consultation initiale / entretien anamnestique - 1h',
              small: 'Indispensable pour préparer le bilan neuropsychologique le plus adapté',
              price: '60 €',
            },
            {
              title: 'Bilan psychométrique - 1h30 / 2h',
              small: 'Test de QI seulement',
              price: '275 €',
            },
            {
              title: 'Bilan neuropsychologique - 2h30 / 3h',
              small: 'Évaluation de la sphère cognitive. Si test de QI < 2ans',
              price: '350 €',
            },
            {
              title: 'Bilan neuropsychologique complet 3h / 4h',
              small: 'Investigation de la sphère cognitive et de la cognition sociale - Si QI<2 ans',
              price: '400 €',
            },
            {
              title: 'Bilan neuropsychologique complet - 4h / 5h',
              small: 'Test de QI + bilan neuropsychologique',
              price: '400 €',
            },
            {
              title: 'Bilan neuropsychologique - Lésionnel / différentiel',
              small: "Investigation de l'ensemble de la sphère cognitive",
              price: '400 €',
            },
            {
              title: 'Bilan neuropsychologique - Cognition sociale - Échelle QI',
              small:
                'Suspicion trouble envahissant du développement, affection psychotique, etc... Difficultés relations sociales, reconnaissance affect',
              price: '475 €',
            },
            {
              title: 'Forfait rééducation mensuel - 45min / 1h',
              small: '1 séances par semaine',
              price: '200 €',
            },
            {
              title: 'Forfait séance de remédiation à domicile',
              small: "2 séances en présence de la neuropsychologue + droit d'accès logiciel internet",
              price: '180 €',
            },
          ]}
        />
        <Paragraph text="<p>Le cabinet offre également la possibilité de payer en trois fois, à la condition que le paiement soit effectué sous 15 jours, sinon une majoration de 20% sera appliquée.</p>" />
      </Layout>
    </>
  );
};

export default TarifsPage;
export const Head = () => <Seo
  title='Tarifs des bilans neuropsychologique enfants et adultes à Lyon, Brignais'
  description='Tarifs des bilans neuropsychologiques, psychométriques et du quotient intellectuel QI pour enfants et adultes à Lyon, Brignais'
/>;

