import Image from 'next/image';
import React from 'react';
import classes from './portfolio-item.module.css';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../recoil/modalAtom';
import { projectState } from '../../../recoil/projectAtom';

const truncate = (string, n) => (string?.length > n ? string.substr(0, n - 1) + ' ...see more' : string);

const PortfolioItem = ({ title, image, projectUrl, projectRepo, keywords, text, youTubeVideo }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [project, setProject] = useRecoilState(projectState);

  const openModalWithProject = () => {
    setModalOpen(true);
    setProject({ title, keywords, text, youTubeVideo });
  };

  return (
    <div className={classes.portfolio__item}>
      <div className="bg-transparent">
        <h6 onClick={openModalWithProject}>{title}</h6>
        {keywords.slice(0, 5).map((keyword, index) => (
          <span className={classes.portfolio__keyword} key={index} onClick={openModalWithProject}>
            {keyword}
          </span>
        ))}
      </div>
      <div className={classes.portfolio__image} onClick={openModalWithProject}>
        <Image src={image} alt="project image" width="380" height="250" />
      </div>
      <p className={classes.portfolio__text} onClick={openModalWithProject}>
        {truncate(text, 70)}
      </p>
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
