import React from 'react';
import classes from './header.module.css';
import Link from 'next/link';
import { Container } from 'reactstrap';

const NAV__LINK = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#services',
    display: 'Services',
  },
  {
    path: '#portfolio',
    display: 'Portfolio',
  },
  {
    path: '#contact',
    display: 'Contact',
  },
];

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>A</span>lexander <span>B</span>akay
            </h1>
          </div>
          <div className={`${classes.navigation}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((link, index) => (
                <Link href={link.path} key={index}>
                  {link.display}
                </Link>
              ))}
              <div className={`${classes.nav__right}`}>
                <p className="d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-line"></i>
                  +905451841029
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
