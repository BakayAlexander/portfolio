import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { contactInfo } from '../../data/personal';
import Form from '../Form/Form';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import classes from './contact.module.css';

const Contact = () => {
  return (
    <section>
      <Container id="contact" className={classes.contact}>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contacts" />
            <h3 className="mt-4 mb-4">Let&apos;s stay connected</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi ad provident dignissimos reiciendis
              nesciunt tempore ex ratione a. Quisquam et alias amet est ea reiciendis adipisci excepturi provident
              eaque.
            </p>
            <ul className={classes.contact__list}>
              <li className={classes.contact__item}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>{contactInfo.adress}</p>
              </li>
              <li className={classes.contact__item}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>{contactInfo.email}</p>
              </li>
              <li className={classes.contact__item}>
                <span>
                  <i className="ri-whatsapp-line"></i>
                </span>
                <p>{contactInfo.number}</p>
              </li>
            </ul>
            <div className={classes.social__links}>
              <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line"></i>
              </a>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
