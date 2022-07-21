import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ServicesItem from '../ServicesItem/ServicesItem';
import classes from './services.module.css';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />
                <ServicesItem title="Mobile App Development" icon="ri-apps-line" />
              </div>
              <ServicesItem title="Full-stack Development" icon="ri-code-view" />
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" className={classes.service__title}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better design,</h3>
            <h3 className="mb-4">Better experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus minus blanditiis est
              reiciendis excepturi aut aliquam assumenda architecto totam ullam, labore dolores animi ea quasi!
              Necessitatibus fuga aperiam accusamus.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
