import React, {FC, ReactElement} from 'react';

const InfoAreaIconTitle: FC<{icon: string; iconColor: string; title: string; description: string[]}> = ({
  icon,
  iconColor,
  title,
  description,
}): ReactElement => {
  const iconBgColor = {
    blueGray: 'text-blueGray-500 bg-white',
    red: 'text-red-500 bg-red-100',
    orange: 'text-orange-500 bg-orange-100',
    amber: 'text-amber-500 bg-amber-100',
    emerald: 'text-emerald-500 bg-emerald-100',
    teal: 'text-teal-500 bg-teal-100',
    lightBlue: 'text-lightBlue-500 bg-lightBlue-100',
    indigo: 'text-indigo-500 bg-indigo-100',
    purple: 'text-purple-500 bg-purple-100',
    pink: 'text-pink-500 bg-pink-100',
  };
  return (
    <>
      <div
        className={
          iconBgColor[iconColor] +
          ' p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full'
        }
      >
        <i className={icon + ' text-xl'}></i>
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">{title}</h3>
      {description.map((prop, key) => {
        return (
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-700" key={key}>
            {prop}
          </p>
        );
      })}
    </>
  );
};

export default InfoAreaIconTitle;
