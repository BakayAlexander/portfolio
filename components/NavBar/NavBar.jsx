import Link from 'next/link';
import React from 'react';
import { NAV__LINK } from '../../constants/constants';
import classes from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={classes.nav__menu}>
      {NAV__LINK.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.display}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
