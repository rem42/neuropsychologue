import React, {FC, ReactElement} from 'react';

const HeaderSimple: FC<{
  title: string;
  titleSize?: string;
  subtitle?: string
}> = ({title,titleSize= 'text-5xl', subtitle}): ReactElement => {
  return (
    <>
      <div className={'p-0 flex items-center overflow-hidden relative min-h-200-px'}>
        <div className="absolute w-full h-full bg-lightBlue-500 z-1"></div>
        <div className="container mx-auto px-4 z-3 relative md:w-6/12">
          <div className="justify-center flex flex-wrap flex-col -mx-4 text-center">
            <h1 className={`${titleSize} font-bold text-white leading-tight mt-0`}>{title}</h1>
            {subtitle && <h2 className="text-2xl text-white mb-24">{subtitle}</h2>}
          </div>
        </div>
        <div className="w-full absolute text-white bottom-0 z-3">
          <div className="w-full pointer-events-none overflow-hidden h-70-px" style={{transform: 'translateZ(0)'}}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-50 fill-current"
                style={{fill: 'rgb(255, 255, 255)', fillOpacity: 1}}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSimple;
