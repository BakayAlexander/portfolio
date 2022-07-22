import Image from 'next/image';
import React from 'react';
import classes from './testimonial-item.module.css';

const TestimonialItem = ({ author, position, text, image }) => {
  return (
    <div className={classes.testimonial__item}>
      <div className={classes.testimonial__client}>
        <Image src={image} alt="client-image" width="50" height="50" className="rounded-2" />
        <div>
          <h6>{author}</h6>
          <h6>{position}</h6>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialItem;
