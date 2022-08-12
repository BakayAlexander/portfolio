import React from 'react';
import { motion } from 'framer-motion';
import classes from './backdrop.module.css';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={classes.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default Backdrop;
