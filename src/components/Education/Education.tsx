import React, {FC, ReactElement} from 'react';

import HeaderSimple from '@components/Header/HeaderSimple';

export interface EducationProps {
  title: string;
  subtitle: string;
  description?: string;
  subDescription: string;
  color?: string;
  alignment?: string;
  whiteContent?: boolean;

  jobs: {
    title: string;
    description: string[];
  }[];
}

const Education: FC<EducationProps> = ({
  alignment = 'center',
  whiteContent = false,
  color = 'slate',
  ...props
}): ReactElement => {
  const colors = {
    light: 'text-slate-200',
    dark: 'text-slate-800',
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
  const alignmentsRow = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };
  const alignmentsText = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  return (
    <>
      <section className="w-full md:w-8/12 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className={'mb-12 flex flex-wrap ' + alignmentsRow[alignment]}>
            <div className={'px-4 relative w-full lg:w-8/12 ' + alignmentsText[alignment]}>
              {props.subtitle && (
                <h6 className={'mb-2 text-lg font-bold uppercase ' + colors[color]}>{props.subtitle}</h6>
              )}
              {props.title && (
                <h2 className={'text-4xl font-bold mt-0 mb-1 ' + (whiteContent ? 'text-white' : 'text-slate-700')}>
                  {props.title}
                </h2>
              )}
              {props.description && (
                <p
                  className={
                    'mt-2 mb-4 text-xl leading-relaxed ' + (whiteContent ? 'text-white opacity-75' : 'text-slate-400')
                  }
                >
                  {props.description}
                </p>
              )}
            </div>
          </div>
          <div className={'flex flex-wrap'}>
            {props.jobs.map((job, index) => (
              <div key={index} className={'px-4 relative w-full'}>
                <div className={'flex flex-wrap items-center'}>
                  <div className={'w-full'}>
                    <h4 className={'text-xl font-bold mb-1 ' + (whiteContent ? 'text-white' : 'text-slate-700')}>
                      {job.title}
                    </h4>
                    <ul className={'list-none pl-0 mb-4'}>
                      {job.description.map((item, index) => (
                        <li
                          key={index}
                          className={'mb-2 text-lg leading-relaxed ' + (whiteContent ? 'text-white' : 'text-slate-400')}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={'flex flex-wrap'}>
            <div className={'relative w-full ' + alignmentsText[alignment]}>
              {props.subDescription && (
                <p
                  className={
                    'mt-2 mb-4 text-lg leading-relaxed ' + (whiteContent ? 'text-white opacity-75' : 'text-slate-400')
                  }
                >
                  {props.subDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
