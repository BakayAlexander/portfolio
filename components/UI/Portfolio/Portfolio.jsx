import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { categoryProjects, portfolioData } from '../../data/projects';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import classes from './portfolio.module.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [data, setData] = useState([]);
  const activeButtonClass = `${classes.tab__btn_active}`;

  const sortReverse = arr => arr.sort((a, b) => b.id - a.id);

  const updateData = useCallback(filter => {
    if (filter === categoryProjects.all) {
      return setData(sortReverse(portfolioData));
    }
    const filteredData = portfolioData.filter(item => item.category === filter);
    setData(sortReverse(filteredData));
  }, []);

  useEffect(() => {
    updateData(filter);
  }, [filter, updateData]);

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">Some of my projects</h4>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.tab__buttons} text-end`}>
              <button
                className={`${filter === categoryProjects.all && activeButtonClass} secondary__btn text-white`}
                onClick={() => setFilter(categoryProjects.all)}
              >
                {categoryProjects.all}
              </button>
              <button
                className={`${filter === categoryProjects.commercial && activeButtonClass} secondary__btn  text-white`}
                onClick={() => setFilter(categoryProjects.commercial)}
              >
                {categoryProjects.commercial}
              </button>
              <button
                className={`${filter === categoryProjects.study && activeButtonClass} secondary__btn text-white`}
                onClick={() => setFilter(categoryProjects.study)}
              >
                {categoryProjects.study}
              </button>
            </div>
          </Col>
          {data?.map(portfolio => (
            <Col lg="4" md="6" sm="6" key={portfolio.id} className="mb-4">
              <PortfolioItem
                title={portfolio.title}
                image={portfolio.image}
                projectUrl={portfolio.projectUrl}
                projectRepo={portfolio.projectRepo}
                keywords={portfolio.keywords}
                text={portfolio.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
