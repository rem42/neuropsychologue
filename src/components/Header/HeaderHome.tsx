import {graphql, useStaticQuery} from 'gatsby';
import React, {FC, ReactElement} from 'react';

import {HeaderHomeInterface} from './HeaderHomeInterface';

const HeaderHome: FC<{props: HeaderHomeInterface}> = ({props}): ReactElement => {
  const {office} = useStaticQuery(
    graphql`
      query {
        office: file(relativePath: {eq: "bureau.jpg"}) {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );

  return (
    <>
      <div className="p-0 flex items-center overflow-hidden relative min-h-screen-60">
        <div
          className="absolute w-full bg-cover bg-center blur-sm h-full z-2"
          style={{
            backgroundImage: `url('${office.childImageSharp.fluid.src}')`,
          }}
        ></div>
        <div className="absolute w-full h-full bg-slate-900 z-1"></div>
        <div className="container mx-auto px-4 z-3 relative md:w-6/12 w-full">
          <div className="justify-center flex flex-wrap flex-col md:-mx-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-0">{props.title}</h1>
            <h2 className="md:text-2xl text-white mb-24">{props.subtitle}</h2>
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
      <div>
        <div className="container mx-auto px-4 z-3 -mt-64 pt-24 relative w-8/12">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="bg-white rounded-xl shadow-lg py-8 w-full">
              <div className="flex flex-wrap">
                {props.jobs.map((job, index) => (
                  <div
                    key={index}
                    className={
                      'px-6 relative w-full lg:w-4/12 w-full md:w-4/12 ' +
                      (props.jobs.length !== index + 1 ? 'md:border-r max-sm:border-b' : null)
                    }
                  >
                    <div className="text-center py-2">
                      <h4 className="text-4xl md:text-5xl font-extrabold leading-tight mt-0 mb-0">{job.name}</h4>
                      <h5 className="text-xl font-semibold mt-2 mb-1">{job.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
