import React, {FC, ReactElement} from 'react';

const CardInfoFullColor: FC<{
  icon: string;
  color: string;
  gradient: boolean;
  title: string;
  description: string;
}> = ({icon, color, gradient, title, description}): ReactElement => {
  // @ts-ignore
  let bgColor: Array<string, string> = {
    'light-gradient': 'bg-gradient-to-r from-slate-100 to-slate-300 bg-slate-200',
    light: 'bg-slate-200',
    'dark-gradient': 'bg-gradient-to-r from-slate-700 to-slate-900  bg-slate-800',
    dark: 'bg-slate-800',
    'slate-gradient': 'bg-gradient-to-r from-slate-400 to-slate-500 bg-slate-500',
    slate: 'bg-slate-500',
    'red-gradient': 'bg-gradient-to-r from-red-400 to-red-500 bg-red-500',
    red: 'bg-red-500',
    'orange-gradient': 'bg-gradient-to-r from-orange-400 to-orange-500 bg-orange-500',
    orange: 'bg-orange-500',
    'amber-gradient': 'bg-gradient-to-r from-amber-400 to-amber-500 bg-amber-500',
    amber: 'bg-amber-500',
    'emerald-gradient': 'bg-gradient-to-r from-emerald-400 to-emerald-500 bg-emerald-500',
    emerald: 'bg-emerald-500',
    'teal-gradient': 'bg-gradient-to-r from-teal-400 to-teal-500 bg-teal-500',
    teal: 'bg-teal-500',
    'lightBlue-gradient': 'bg-gradient-to-r from-lightBlue-400 to-lightBlue-500 bg-lightBlue-500',
    lightBlue: 'bg-lightBlue-500',
    'indigo-gradient': 'bg-gradient-to-r from-indigo-400 to-indigo-500 bg-indigo-500',
    indigo: 'bg-indigo-500',
    'purple-gradient': 'bg-gradient-to-r from-purple-400 to-purple-500 bg-purple-500',
    purple: 'bg-purple-500',
    'pink-gradient': 'bg-gradient-to-r from-pink-400 to-pink-500 bg-pink-500',
    pink: 'bg-pink-500',
  };

  // @ts-ignore
  let iconColor: Array<string, string> = {
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
  // @ts-ignore
  let textColor: Array<string, string> = {
    light: 'text-slate-700',
    dark: 'text-slate-100',
    slate: 'text-white',
    red: 'text-white',
    orange: 'text-white',
    amber: 'text-white',
    emerald: 'text-white',
    teal: 'text-white',
    lightBlue: 'text-white',
    indigo: 'text-white',
    purple: 'text-white',
    pink: 'text-white',
  };
  let gradientText = gradient ? '-gradient' : '';
  return (
    <>
      <div className={bgColor[color + gradientText] + ' rounded-lg text-left p-6 flex items-start'}>
        <div className="flex-1">
          <div
            className={
              iconColor[color] +
              ' bg-white shadow-lg rounded rounded-full justify-center items-center text-center p-2 mx-auto mb-5 inline-flex w-12 h-12'
            }
          >
            <i className={icon + ' text-xl'}></i>
          </div>
          <h4 className={'text-2xl font-semibold leading-normal ' + textColor[color]}>{title}</h4>
          <p className={'mt-2 ' + textColor[color]}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardInfoFullColor;
