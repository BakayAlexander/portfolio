import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { contactInfo, personalTexts } from '../../data/personal';
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
            <p>{personalTexts.contacts}</p>
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
                <a href={`https://wa.me/${contactInfo.whatsApp}`} target="_blank" rel="noopener noreferrer">
                  <p>{contactInfo.number}</p>
                </a>
              </li>
            </ul>
            <div className={classes.social__links}>
              <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
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
