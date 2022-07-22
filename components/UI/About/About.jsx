import React from 'react';
import classes from './about.module.css';
import { Container, Row, Col } from 'reactstrap';

import img01 from '../../../public/images/img-01.jpeg';
import img02 from '../../../public/images/img-02.jpeg';
import img03 from '../../../public/images/img-03.jpeg';
import img04 from '../../../public/images/img-04.jpeg';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import Image from 'next/image';
import { contactInfo, personalTexts } from '../../data/personal';

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={classes.about__content}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>{personalTexts.aboutMe}</p>
            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem solving
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Clean code
                </h6>
              </div>
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative ideas
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High quality
                </h6>
              </div>
            </div>
            <div className="mt-5">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <button className="primary__btn">My Repository</button>
              </a>
              <button className="secondary__btn">
                <a href={contactInfo.cvLink} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </button>
            </div>
          </Col>
          <Col lg="6">
            <div className={`${classes.about__gallery} d-flex gap-4 justify-content-end`}>
              <div className="d-flex flex-column mb-3">
                <div className={`${classes.about__image} ${classes.about__image_box}`}>
                  <Image src={img03} alt="Alexander photo" />
                </div>
                <div className={`${classes.about__image} ${classes.about__image_box}`}>
                  <Image src={img01} alt="Alexander photo" />
                </div>
              </div>
              <div>
                <div className={`${classes.about__image} ${classes.about__image_box}`}>
                  <Image src={img02} alt="Alexander photo" />
                </div>
                <div className={`${classes.about__image} ${classes.about__image_box}`}>
                  <Image src={img04} alt="Alexander photo" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
