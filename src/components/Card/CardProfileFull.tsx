import React, {FC, ReactElement} from 'react';

export interface ListCardProfile {
  color: string;
  icon: string;
  text: string;
}

const CardProfileFull: FC<{
  image?: string;
  title: string;
  description: boolean;
  list: ListCardProfile[];
}> = ({image, title, description, list}): ReactElement => {
  // @ts-ignore
  let colorClass = {
    blueGray: "text-blueGray-500 bg-blueGray-200",
    red: "text-red-500 bg-red-200",
    orange: "text-orange-500 bg-orange-200",
    amber: "text-amber-500 bg-amber-200",
    emerald: "text-emerald-500 bg-emerald-200",
    teal: "text-teal-500 bg-teal-200",
    lightBlue: "text-lightBlue-500 bg-lightBlue-200",
    indigo: "text-indigo-500 bg-indigo-200",
    purple: "text-purple-500 bg-purple-200",
    pink: "text-pink-500 bg-pink-200",
  };
  return (
    <>
      <div className="shadow-lg relative flex flex-col min-w-0 break-words bg-white w-full">
        <div className="relative">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="block w-full absolute text-white svg-bg"
            style={{ height: "95px", bottom: "0" }}
          >
            <polygon
              points="583,55 583,95 0,95"
              style={{ fill: "currentColor" }}
            ></polygon>
          </svg>
        </div>
        <div className="px-4 py-5 flex-auto">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm mt-1 mb-5 text-blueGray-400 font-bold uppercase">
            {description}
          </p>
          <div className="block w-full" style={{ overflowX: "auto" }}>
            <ul className="list-none">
              {list.map((prop, key) => {
                return (
                  <li className="py-1" key={key}>
                    <div className="flex items-center">
                      <span
                        className={
                          "inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 text-sm " +
                          colorClass[prop.color]
                        }
                      >
                        <i className={prop.icon}></i>
                      </span>
                      <h6 className="text-md text-blueGray-500">{prop.text}</h6>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfileFull;
