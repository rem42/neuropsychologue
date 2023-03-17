import {LinkItem} from '@type/LinkItem';
import classnames from 'classnames';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React, {FC, ReactElement, useRef, useState} from 'react';

const NavbarLinks: FC<{
  color: string;
  links: LinkItem[];
}> = ({color, links}): ReactElement => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseStyle, setCollapseStyle] = useState<any>(undefined);
  const [animation, setAnimation] = useState(false);
  const collapseRef = useRef(null);
  const startAnitmation = (): void => {
    if (!animation) {
      setAnimation(true);
      if (collapseOpen) {
        setCollapseStyle(0);
        setTimeout(function () {
          setAnimation(false);
          setCollapseOpen(false);
        }, 310);
      } else {
        setCollapseOpen(true);
        setTimeout(function () {
          // @ts-ignore
          setCollapseStyle(collapseRef.current.scrollHeight);
        }, 10);
        setTimeout(function () {
          setAnimation(false);
        }, 310);
      }
    }
  };

  // @ts-ignore
  const navBg: Array<string, string> = {
    dark: 'bg-slate-800 shadow-md',
    light: 'bg-slate-200 shadow-md',
    transparent: 'lg:bg-transparent bg-white',
    white: 'bg-white shadow-md',
    black: 'bg-black shadow-md',
    slate: 'bg-slate-500 shadow-md',
    red: 'bg-red-500 shadow-md',
    orange: 'bg-orange-500 shadow-md',
    amber: 'bg-amber-500 shadow-md',
    emerald: 'bg-emerald-500 shadow-md',
    teal: 'bg-teal-500 shadow-md',
    lightBlue: 'bg-lightBlue-500 shadow-md',
    indigo: 'bg-indigo-500 shadow-md',
    purple: 'bg-purple-500 shadow-md',
    pink: 'bg-pink-500 shadow-md',
  };
  // @ts-ignore
  const linkColors: Array<string, string> = {
    light: 'text-slate-500',
    dark: 'text-white',
    transparent: 'lg:text-white text-slate-500',
    white: 'text-slate-500',
    black: 'text-white',
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

  return (
    <>
      <nav className={'fixed w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 ' + navBg[color]}>
        <div className="flex container mx-auto flex flex-wrap items-center justify-between px-0 lg:px-4">
          <Link
            to="/"
            className={
              'text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase ' +
              linkColors[color]
            }
          >
            <StaticImage
              alt=""
              src={'../../images/picto_cerveau_half.png'}
              className="rounded-full mr-2"
              style={{width: '30px'}}
            />
            <span>neuropsychologue</span>
          </Link>
          <button
            className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-slate-400 rounded bg-transparent block outline-none focus:outline-none text-slate-300 lg:hidden"
            type="button"
            onClick={startAnitmation}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={classnames(
              'items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out',
              {
                'block h-0': collapseOpen,
                hidden: !collapseOpen,
                'overflow-hidden': animation,
              },
            )}
            style={{
              height: collapseStyle,
            }}
            ref={collapseRef}
          >
            <ul className="lg:items-center flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      children={link.children}
                      className={
                        'hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out ' +
                        linkColors[color]
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLinks;
