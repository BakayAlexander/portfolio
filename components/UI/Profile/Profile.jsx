import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import profileImg from '../../../public/images/hero.jpeg';
import { contactInfo, personalTexts } from '../../data/personal';
import classes from './profile.module.css';

const Profile = () => {
  return (
    <section className={classes.profile} id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.profile__content}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Alexander Bakay</h2>
              <h5 className="mb4">Frontend developer</h5>
              <p>{personalTexts.profileMe}</p>
              <div className="mt-5">
                <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                  <button className="primary__btn">Hire me</button>
                </a>
                <button className="secondary__btn">
                  <a href={contactInfo.cvLink} target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.profile__image} text-end`}>
              <Image alt="Alexander photo" src={profileImg} width="320" height="420" />
              <div className={classes.profile__skills}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
              <div className={`${classes.profile__exp} d-flex align-items-center gap-3`}>
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;
