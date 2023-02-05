import React, {FC, ReactElement} from 'react';

const Paragraph: FC<{title?: string; text: string}> = ({title, text}): ReactElement => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full">
            {title && <h2 className="text-4xl font-semibold leading-tight mt-0 mb-2">{title}</h2>}
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base" dangerouslySetInnerHTML={{__html: text}} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Paragraph;
