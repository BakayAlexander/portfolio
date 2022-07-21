import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { contactInfo } from '../../../constants/constants';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import classes from './contact.module.css';

const Contact = () => {
  return (
    <section>
      <Container id="contact" className={`${classes.contact}`}>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Let&apos;s stay connected</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi ad provident dignissimos reiciendis
              nesciunt tempore ex ratione a. Quisquam et alias amet est ea reiciendis adipisci excepturi provident
              eaque.
            </p>
            <ul className={`${classes.contact__list}`}>
              <li className={`${classes.contact__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>{contactInfo.adress}</p>
              </li>
              <li className={`${classes.contact__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>{contactInfo.email}</p>
              </li>
              <li className={`${classes.contact__item}`}>
                <span>
                  <i className="ri-whatsapp-line"></i>
                </span>
                <p>{contactInfo.number}</p>
              </li>
            </ul>
          </Col>
          <div className={`${classes.social__links}`}>
            <Link href={contactInfo.linkedIn}>
              <i className="ri-linkedin-line"></i>
            </Link>
            <Link href={contactInfo.instagram}>
              <i className="ri-instagram-line"></i>
            </Link>
            <Link href={contactInfo.github}>
              <i className="ri-github-line"></i>
            </Link>
          </div>
          <Col lg="6" md="6"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
