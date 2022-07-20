import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './portfolio-item.module.css';

const PortfolioItem = ({ title, image, projectUrl, projectRepo, keywords }) => {
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keywords.map((keyword, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {keyword}
          </span>
        ))}
      </div>
      <div className={`${classes.portfolio__image}`}>
        <Image src={image} alt="project image" width="380" height="250" />
      </div>
      <div className={`${classes.portfolio__link}`}>
        {projectRepo && (
          <button className="primary__btn">
            <Link href={projectUrl}>Repo</Link>
          </button>
        )}
        {projectUrl && (
          <button className="secondary__btn">
            <Link href={projectUrl}>Launch</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
