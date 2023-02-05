import React, {FC, ReactElement} from 'react';

const Map: FC<{url: string}> = ({url}): ReactElement => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full h-screen-50 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src={url}

              /*style={{filter: "grayscale(1) contrast(1.2) opacity(0.7)"}}*/
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
