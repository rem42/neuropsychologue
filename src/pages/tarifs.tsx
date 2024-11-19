import React, {FC, ReactElement} from 'react';

import HeaderSimple from '@components/Header/HeaderSimple';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import PricingHero from '@components/Pricing/PricingHero';
import PricingList from '@components/Pricing/PricingList';
import {Seo} from '@components/Seo';

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
              price: '355 €',
              list: [
                {title: '65€', description: 'Entretien anamnestique'},
                {title: '290€', description: 'forfait du bilan intellectuel'},
                {title: 'Le / les séance·s', description: 'du bilan intellectuel'},
                {title: "l'entretien de restitution", description: ''},
                {title: 'Compte rendu', description: 'écrit'},
              ],
            },
            {
              title: 'Bilan neuropsychologique',
              color: 'teal',
              price: '505 €',
              list: [
                {title: '65€', description: 'Entretien anamnestique'},
                {title: '440€', description: 'forfait du bilan neuropsychologique'},
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
              title: 'Consultation initiale / entretien anamnestique',
              small: 'Indispensable pour préparer le bilan neuropsychologique le plus adapté',
              price: '65 €',
            },
            {
              title: 'Bilan psychométrique - 1 séance de bilan',
              small: 'Test de QI seulement',
              price: '290 €',
            },
            {
              title: 'Bilan neuropsychologique - 2 séances de bilan (si QI < 2 ans)',
              small: 'Évaluation de la sphère cognitive. Si test de QI < 2ans',
              price: '390 €',
            },
            {
              title: 'Bilan neuropsychologique + la cognition sociale - 3 séances de bilan (si QI < 2 ans)',
              small: 'Investigation de la sphère cognitive et de la cognition sociale - Si QI < 2 ans',
              price: '440 €',
            },
            {
              title: 'Bilan neuropsychologique complet - 3 séances de bilan',
              small: 'Test de QI + bilan neuropsychologique',
              price: '440 €',
            },
            {
              title: 'Bilan neuropsychologique - Lésionnel / différentiel - 2 séances de bilan',
              small: "Investigation de l'ensemble de la sphère cognitive",
              price: '440 €',
            },
            {
              title: 'Bilan neuropsychologique - Cognition sociale - Échelle QI - 4 séances de bilan',
              small:
                'Suspicion trouble envahissant du développement, affection psychotique, etc... Difficultés relations sociales, reconnaissance affect',
              price: '520 €',
            },
            {
              title: 'Forfait rééducation mensuel',
              small: '1 séances par semaine',
              price: '200 €',
            },
            {
              title: 'Forfait séance de remédiation à domicile',
              small: "2 séances en présence de la neuropsychologue + droit d'accès logiciel internet",
              price: '180 €<br/> + frais de déplacement',
            },
            {
              title: 'Présence équipe éducative',
              small: '',
              price: '65 €<br/> + frais de déplacement',
            },
            {
              title: 'Séance de suivi en psychologie',
              small: '',
              price: '65 €',
            },
          ]}
        />
        <Paragraph text="<p>Le cabinet offre également la possibilité de payer en trois fois, à la condition que le paiement soit effectué sous 15 jours, sinon une majoration de 20% sera appliquée.</p>" />
      </Layout>
    </>
  );
};

export default TarifsPage;
export const Head = () => (
  <Seo
    title="Tarifs des bilans neuropsychologique enfants et adultes à Lyon, Brignais"
    description="Tarifs des bilans neuropsychologiques, psychométriques et du quotient intellectuel QI pour enfants et adultes à Lyon, Brignais"
  />
);
