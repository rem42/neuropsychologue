import React, {FC, ReactElement} from 'react';

const InfoAreaIconTitleList: FC<{
  icon: string;
  color: string;
  title: string;
  description: string | Array<string>;
  list?: Array<{icon: string; text: string}>;
}> = ({icon, color, title, description, list}): ReactElement => {
  let newDescription = [];
  if (!Array.isArray(description)) {
    // @ts-ignore
    newDescription = [description];
  } else {
    // @ts-ignore
    newDescription = description;
  }
  // @ts-ignore
  const iconBgColor: Array<string, string> = {
    slate: 'text-white bg-slate-500',
    red: 'text-white bg-red-500',
    orange: 'text-white bg-orange-500',
    amber: 'text-white bg-amber-500',
    emerald: 'text-white bg-emerald-500',
    teal: 'text-white bg-teal-500',
    lightBlue: 'text-white bg-lightBlue-500',
    indigo: 'text-white bg-indigo-500',
    purple: 'text-white bg-purple-500',
    pink: 'text-white bg-pink-500',
  };
  return (
    <>
      <div className="rounded text-left pb-6 md:px-12 md:mx-12 flex items-start">
        <div className="px-6 flex-1">
          <div
            className={
              iconBgColor[color] +
              ' shadow-lg rounded rounded-full justify-center items-center text-left mx-auto mb-6 inline-flex w-12 h-12 text-xl'
            }
          >
            <i className={icon}></i>
          </div>
          <h2 className="text-4xl font-semibold leading-tight mt-0 mb-2">{title}</h2>
          {newDescription.map((prop, key) => {
            return (
              <p className="mb-4 text-slate-500" key={key}>
                {prop}
              </p>
            );
          })}
          {list && (
            <ul className="list-none">
              {list.map((prop, key) => (
                <li key={key} className="py-2">
                  <div className="flex items-center">
                    <i className={'mr-2 text-sm text-slate-500 ' + prop.icon}></i>
                    <p className="mb-0">{prop.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoAreaIconTitleList;
