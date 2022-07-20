import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './footer.module.css';
import Link from 'next/link';

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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <Row>
        <Col lg="6">
          <div className={`${classes.nav__menu}`}>
            {NAV__LINK.map((link, index) => (
              <Link href={link.path} key={index}>
                {link.display}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg="6">
          <div className={`${classes.footer__creator}`}>
            <h6>Developed by Alexander Bakay</h6>
          </div>
        </Col>
        <Col lg="12">
          <div className={`${classes.footer__copyright}`}>
            <p>&copy; Copyright {year}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
