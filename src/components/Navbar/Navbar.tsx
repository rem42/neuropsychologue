import {LinkItem} from '@type/LinkItem';
import React from 'react';

import NavbarLinks from './NavbarLinks';

const links: LinkItem[] = [
  {id: 'home', to: '/', children: 'Accueil'},
  {id: 'presentation', to: '/presentation', children: 'Présentation'},
  {id: 'lyon', to: '/cabinet-hebella-lyon', children: 'Lyon'},
  {id: 'brignais', to: '/maison-sante-brignais', children: 'Brignais'},
  {id: 'bilan', to: '/bilan-neuropsychologique', children: 'Bilan neuropsychologique'},
  {id: 'remediation', to: '/remediation-cognitive', children: 'Remédiation cognitive'},
  {id: 'tarifs', to: '/tarifs', children: 'Tarifs'},
  {id: 'contact', to: '/prendre-rendez-vous', children: 'Contact'},
];

export default function Navbar() {
  return (
    <>
      <NavbarLinks color="lightBlue" links={links} />
    </>
  );
}
