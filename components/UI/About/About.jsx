import React from 'react';
import classes from './about.module.css';
import { Container, Row, Col } from 'reactstrap';

import img01 from '../../../public/images/img-01.jpeg';
import img02 from '../../../public/images/img-02.jpeg';
import img03 from '../../../public/images/img-03.jpeg';
import img04 from '../../../public/images/img-04.jpeg';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quod eveniet perferendis aperiam temporibus
              ipsum exercitationem consequatur sapiente qui, beatae quidem neque numquam nam libero minus quibusdam
              facere animi quaerat!
            </p>
            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem solving
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Clean code
                </h6>
              </div>
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative ideas
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High quality
                </h6>
              </div>
            </div>
            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>
              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="d-flex gap-4 justify-content-end">
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
