import React, { useEffect, useRef, useState } from 'react';
import classes from './header.module.css';
import { Container } from 'reactstrap';
import NavBar from '../NavBar/NavBar';
import { contactInfo } from '../data/personal';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const addStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add(classes.header__shrink);
    } else {
      headerRef.current.classList.remove(classes.header__shrink);
    }
  };

  const toggleMobileMenu = () => menuRef.current.classList.toggle(classes.navigation_active);

  useEffect(() => {
    window.addEventListener('scroll', addStickyHeader);
    return () => window.removeEventListener('scroll', addStickyHeader);
  }, []);

  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <div className={classes.nav__wrapper}>
          <div className={classes.logo}>
            <h1>
              <span>A</span>lexander <span>B</span>akay
            </h1>
          </div>
          <div className={classes.navigation} ref={menuRef} onClick={toggleMobileMenu}>
            <NavBar />
            <div className={classes.nav__right}>
              <p className="d-flex align-items-center gap-2">
                <i className="ri-whatsapp-line"></i>
                <a
                  className={classes.nav__whatsApp}
                  href={`https://wa.me/${contactInfo.whatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.number}
                </a>
              </p>
            </div>
          </div>
          <div className={classes.mobile__menu}>
            <i className="ri-menu-line" onClick={toggleMobileMenu}></i>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
