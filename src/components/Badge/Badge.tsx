import {ReactNodeLike} from 'prop-types';
import React, {FC, ReactElement} from 'react';

const Badge: FC<
  JSX.IntrinsicAttributes & {
    round: boolean;
    color: string;
    children: ReactNodeLike;
    rest: any;
  }
> = ({round, color, children, rest}): ReactElement => {
  const colors = {
    light: 'text-slate-500 bg-slate-100',
    dark: 'text-slate-800 bg-slate-400',
    slate: 'text-slate-500 bg-slate-200',
    red: 'text-red-500 bg-red-200',
    orange: 'text-orange-500 bg-orange-200',
    amber: 'text-amber-500 bg-amber-200',
    emerald: 'text-emerald-500 bg-emerald-200',
    teal: 'text-teal-500 bg-teal-200',
    lightBlue: 'text-lightBlue-500 bg-lightBlue-200',
    indigo: 'text-indigo-500 bg-indigo-200',
    purple: 'text-purple-500 bg-purple-200',
    pink: 'text-pink-500 bg-pink-200',
  };
  // @ts-ignore
  let className =
    colors[color] +
    ' text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight ' +
    (round ? 'rounded-full px-3' : 'rounded px-2');
  return (
    <>
      <span {...rest} className={className}>
        {children}
      </span>
    </>
  );
};

export default Badge;
