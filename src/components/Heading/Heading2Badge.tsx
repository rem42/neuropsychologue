import React, {FC, ReactElement} from 'react';

import Badge from '@components/Badge/Badge';

const Heading2Badge: FC<{
  badge?: any;
  title: string;
  description?: string;
  color?: string;
  alignment?: string;
  whiteContent?: boolean;
}> = ({badge, title, description, color, alignment, whiteContent}): ReactElement => {
  // @ts-ignore
  const alignmentsRow: Array<string, string> = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };
  // @ts-ignore
  const alignmentsText: Array<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  return (
    <>
      <div className={'flex flex-wrap -mx-4 ' + alignmentsRow[alignment]}>
        <div className={'px-4 relative w-full ' + alignmentsText[alignment]}>
          {badge && <Badge {...badge} />}
          {title && (
            <h2 className={'text-4xl font-bold mt-3 mb-1 ' + (whiteContent ? 'text-white' : 'text-slate-700')}>
              {title}
            </h2>
          )}
          {description && (
            <p className={'mt-2 mb-4 text-xl leading-relaxed ' + (whiteContent ? 'text-white' : 'text-slate-400')}>
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Heading2Badge;
