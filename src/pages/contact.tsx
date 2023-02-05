import React, {FC, ReactElement} from 'react';

import HeaderSimple from '@components/Header/HeaderSimple';
import Layout from '@components/Layout';
import Paragraph from '@components/Paragraph/Paragraph';
import {Seo} from "@components/Seo";

const ContactPage: FC = (): ReactElement => {
  return (
    <>
      <Layout>
        <HeaderSimple title="Besoin d'information ou d'un rendez-vous ?" />
        <Paragraph text="<p>Pour toute demande de rendez-vous ou si vous souhaitez obtenir plus d’informations, n’hésitez pas à contacter directement le practicien par téléphone ou à remplir ce formulaire avec votre message en indiquant vos coordonnées et nous reviendrons vers vous le plus rapidement possible.</p>" />
      </Layout>
    </>
  );
};

export default ContactPage;
export const Head = () => <Seo
  title='Prendre rendez-vous pour un bilan neuropsychologique'
  description='Prendre rendez-vous pour un bilan neuropsychologique à Lyon ou Brignais'
/>;

