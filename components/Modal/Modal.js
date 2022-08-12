import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';
import classes from './modal.module.css';
import { modalState } from '../../recoil/modalAtom';
import { useRecoilState } from 'recoil';
import ReactPlayer from 'react-player';
import { baseUrlYouTubeVideo, defaultUrlYouTubeVideo } from '../../constants/constants';
import { CgClose } from 'react-icons/cg';
import { projectState } from '../../recoil/projectAtom';

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const Modal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [project, setProject] = useRecoilState(projectState);

  const handleClose = () => {
    setModalOpen(false);
    setProject(null);
    document.body.style.overflow = 'auto';
  };

  if (modalOpen) {
    document.body.style.overflow = 'hidden';
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className={classes.modal}
        variants={gifYouUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={handleClose} className={classes.modal__button}>
          <CgClose className={classes.modal__buttonIcon} />
        </button>
        <div className={classes.modal__link}>
          {project.projectRepo && (
            <a href={project.projectRepo} target="_blank" rel="noopener noreferrer">
              <button className="primary__btn">Repo</button>
            </a>
          )}
          {project.projectUrl && (
            <button className="secondary__btn">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                Launch
              </a>
            </button>
          )}
        </div>
        <h3 className={classes.modal__title}>{project.title}</h3>
        <p className={classes.modal__text}>{project.text}</p>
        <div className={classes.modal__keywordsContainer}>
          {project.keywords.map((keyword, index) => (
            <span className={classes.modal__keyword} key={index}>
              {keyword}
            </span>
          ))}
        </div>
        <div className={classes.modal__video}>
          <ReactPlayer
            url={`${baseUrlYouTubeVideo}${project.youTubeVideo || defaultUrlYouTubeVideo}`}
            width="100%"
            height="65%"
            style={{ position: 'absolute', bottom: '0', left: '0' }}
            controls
          />
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
