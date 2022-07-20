import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { portfolioData } from '../../data/portfolio';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import classes from './portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">Some of my projects</h4>
          </Col>
          <Col lg="6" md="6">
            <div className="text-end">
              <button className={`${classes.tab__btn_active} secondary__btn`}>Commercial projects</button>
              <button className={`${classes.tab__btn_active} secondary__btn text-white`}>Study projects</button>
            </div>
          </Col>
          {portfolioData.map(portfolio => (
            <Col lg="4" md="4" key={portfolio.id}>
              <PortfolioItem
                title={portfolio.title}
                image={portfolio.image}
                projectUrl={portfolio.projectUrl}
                projectRepo={portfolio.projectRepo}
                keywords={portfolio.keywords}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
