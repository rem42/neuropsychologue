import React, {FC, ReactElement} from 'react';

const Skew: FC<{color?: string; background?: string}> = ({color = 'text-slate-100', background}): ReactElement => {
  return (
    <>
      <div
        className={'w-full pointer-events-none overflow-hidden h-70-px ' + background}
        style={{transform: 'translateZ(0)'}}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className={color + ' fill-current z-50'} points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </>
  );
};

export default Skew;
