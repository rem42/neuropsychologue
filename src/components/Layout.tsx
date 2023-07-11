import React from 'react';

import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';

function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className="pt-24">{children}</div>
      <Footer
        openHours={[
          {
            day: 'Lundi',
            hours: '8h - 21h',
          },
          {
            day: 'Mardi',
            hours: '8h - 21h',
          },
          {
            day: 'Mercredi',
            hours: '8h - 21h',
          },
          {
            day: 'Jeudi',
            hours: '8h - 21h',
          },
          {
            day: 'Vendredi',
            hours: '8h - 21h',
          },
          {
            day: 'Samedi',
            hours: '8h - 21h',
          },
          {
            day: 'Dimanche',
            hours: 'Fermé',
          },
        ]}
        locations={[
          {
            title: 'Lyon',
            description: '276 rue André Philip<br/>69003 Lyon',
          },
          {
            title: 'Brignais',
            description: '28 Rue Paul Bovier Lapierre<br/>69530 Brignais',
          },
        ]}
        professionals={[
          {
            title: 'Lauralee HEBERT',
            description: 'Psychologue - Neuropsychologue',
            phone: '06 52 45 35 38',
          },
          {
            title: 'Solène LABOUCHE',
            description: 'Psychologue - Neuropsychologue',
            phone: '06 47 93 12 40',
          },
        ]}
        copyRight={new Date().getFullYear() + ' © Rémy BRUYERE'}
      />
    </>
  );
}

export default Layout;
