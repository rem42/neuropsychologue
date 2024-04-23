import {StaticImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement} from 'react';

import InfoAreaIcon from '@components/InfoAreas/InfoAreaIcon';
import Skew from '@components/Skew/Skew';

export interface FooterLargeInterface {
  locations: {
    title: string;
    description: string;
  }[];
  professionals: {
    title: string;
    description: string;
    phone: string;
  }[];
  openHours: {
    day: string;
    hours: string;
  }[];
  copyRight: string;
}

const Footer: FC<FooterLargeInterface> = ({professionals, locations, openHours, copyRight}): ReactElement => {
  const professionalsColumns = ' columns-' + professionals.length;
  return (
    <>
      <footer>
        <Skew color="text-slate-500" />
        <div className="relative bg-slate-500 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-center">
              <div className="w-full lg:w-1/2 px-4">
                <table className="table-auto text-center whitespace-no-wrap mx-auto">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-slate-500 rounded-tl rounded-bl"
                      >
                        Horaires d'ouverture
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {openHours.map((line, lineKey) => {
                      const classFirst = lineKey !== 0 ? 'border-t border-zinc-200 ' : '';
                      return (
                        <tr key={lineKey}>
                          <td className={classFirst + 'px-2 py-1'}>{line.day}</td>
                          <td className={classFirst + 'px-2 py-1'}>{line.hours}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="w-full lg:w-1/2 columns-2 px-4">
                {locations.map((location, index) => (
                  <div className="w-full" key={index}>
                    <InfoAreaIcon
                      color={'lightBlue'}
                      icon={'fas fa-map-marker-alt'}
                      title={location.title}
                      description={[location.description]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Skew background="bg-slate-500" />
        <div className="relative bg-slate-100 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left">
              <div className={'w-full lg:w-8/12 px-4 text-center' + professionalsColumns}>
                {professionals.map((professional, index) => (
                  <div className="w-full" key={index}>
                    <h4 className="text-xl font-bold">{professional.title}</h4>
                    <h5 className="mt-1 mb-2 text-slate-500">{professional.description}</h5>
                    <div className="mt-6 lg:mb-0 mb-6">
                      <a
                        href={'tel:' + professional.phone.replace(/ /g, '')}
                        className={
                          'bg-white text-facebook-regular shadow-lg font-normal h-10 px-6 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex flex justify-around'
                        }
                        type="button"
                      >
                        <i className="fa fa-phone mr-4"></i>
                        <span>{professional.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <StaticImage
                    src={'../../images/picto_cerveau.svg'}
                    alt="Logo neuropsychologue lauralee Hébert"
                    className="w-1/3 mx-auto"
                    layout="constrained"
                    width={240}
                  />
                </div>
              </div>
            </div>
            <hr className="my-6 border-slate-200" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-slate-500 py-1">
                  <a href="https://remy.ovh/" target="_blank">
                    {copyRight}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
