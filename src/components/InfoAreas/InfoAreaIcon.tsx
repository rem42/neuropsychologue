import React, {FC, ReactElement} from 'react';

const InfoAreaIcon: FC<{icon: string; color: string; title: string; description: string[]}> = ({
  icon,
  color,
  title,
  description,
}): ReactElement => {
  const colors = {
    light: 'text-slate-800 bg-slate-100',
    dark: 'text-slate-100 bg-slate-800',
    slate: 'text-white bg-slate-200',
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
      <div className="text-center py-6">
        <div
          className={
            colors[color] +
            ' shadow-lg rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16'
          }
        >
          <i className={icon + ' text-lg'} />
        </div>
        <h4 className="text-xl font-bold leading-tight mt-0 mb-2">{title}</h4>
        <div className="mb-4">
          {description.map((prop, key) => {
            return <p key={key} dangerouslySetInnerHTML={{__html: prop}} />;
          })}
        </div>
      </div>
    </>
  );
};

export default InfoAreaIcon;
