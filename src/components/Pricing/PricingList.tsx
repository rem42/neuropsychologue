import React, {FC, ReactElement} from 'react';

export interface PricingLine {
  title: string;
  small: string;
  price: string;
}

const PricingList: FC<{
  tableHead: string[];
  tableBody: PricingLine[];
}> = ({tableHead, tableBody}): ReactElement => {
  const colors = {
    slate: 'text-slate-500',
    red: 'text-red-500',
    orange: 'text-orange-500',
    amber: 'text-amber-500',
    emerald: 'text-emerald-500',
    teal: 'text-teal-500',
    lightBlue: 'text-lightBlue-500',
    indigo: 'text-indigo-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
  };
  return (
    <>
      <section className="text-zinc-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-zinc-900">Liste des prestations</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              En cas d’empêchement : tout rendez-vous doit être annulé 24h à l'avance sinon il sera facturé dans sa
              totalité.
            </p>
          </div>
          <div className="lg:w-3/4 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  {tableHead.map((prop, key) => {
                    const classFirst = key === 0 ? ' rounded-tl rounded-bl' : '';
                    const classLast = key === tableHead.length - 1 ? ' rounded-tr rounded-br' : '';
                    return (
                      <th
                        key={key}
                        className={
                          'px-4 py-3 title-font tracking-wider font-medium text-zinc-900 text-sm bg-zinc-100' +
                          classFirst +
                          classLast
                        }
                      >
                        {prop}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tableBody.map((line, lineKey) => {
                  const classFirst = lineKey !== 0 ? 'border-t-2 border-zinc-200 ' : '';
                  return (
                    <tr key={lineKey}>
                      <td className={classFirst + 'px-4 py-3'}>
                        {line.title}
                        <br />
                        <small>{line.small}</small>
                      </td>
                      <td className={classFirst + 'px-4 py-3'}>{line.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingList;
