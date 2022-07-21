import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './footer.module.css';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.screen.width > 1000);
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="6">{isDesktop && <NavBar />}</Col>
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
