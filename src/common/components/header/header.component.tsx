import clsx from 'clsx';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Container} from '../container/container.component';

export const Header: React.FC = () => {
  const navLinkClasses = ({isActive}: {isActive: boolean}) =>
    clsx('py-navItem', {
      'text-black/30': !isActive,
      'text-black/80': isActive,
    });

  return (
    <header>
      <nav className="px-2 py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              to={'/'}
              className="font-titillium text-2xl mr-8 text-conduit-green">
              conduit
            </Link>

            <ul className="pl-0 my-0 list-none flex">
              <li>
                <NavLink to={'/'} className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to={'/sign-in'} className={navLinkClasses}>
                  Sign in
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to={'/sign-up'} className={navLinkClasses}>
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};
