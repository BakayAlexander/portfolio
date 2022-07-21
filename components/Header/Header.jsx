import React, { useEffect, useRef } from 'react';
import classes from './header.module.css';
import Link from 'next/link';
import { Container } from 'reactstrap';
import NavBar from '../NavBar/NavBar';
import { contactInfo } from '../../constants/constants';

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add(classes.header__shrink);
    } else {
      headerRef.current.classList.remove(classes.header__shrink);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>A</span>lexander <span>B</span>akay
            </h1>
          </div>
          <div className={`${classes.navigation}`}>
            <NavBar />
            <div className={`${classes.nav__right}`}>
              <p className="d-flex align-items-center gap-2">
                <i className="ri-whatsapp-line"></i>
                {contactInfo.number}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
