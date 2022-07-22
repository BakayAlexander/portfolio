import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './portfolio-item.module.css';

const PortfolioItem = ({ title, image, projectUrl, projectRepo, keywords }) => {
  return (
    <div className={classes.portfolio__item}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keywords.map((keyword, index) => (
          <span className={classes.portfolio__keyword} key={index}>
            {keyword}
          </span>
        ))}
      </div>
      <div className={classes.portfolio__image}>
        <Image src={image} alt="project image" width="380" height="250" />
      </div>
      <div className={classes.portfolio__link}>
        {projectRepo && (
          <a href={projectRepo} target="_blank" rel="noopener noreferrer">
            <button className="primary__btn">Repo</button>
          </a>
        )}
        {projectUrl && (
          <button className="secondary__btn">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Launch
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
