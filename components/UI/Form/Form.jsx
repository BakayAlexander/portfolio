import React from 'react';
import classes from './form.module.css';

const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.form__input}>
        <input type="text" placeholder="Your name" required></input>
      </div>
      <div className={classes.form__input}>
        <input type="email" placeholder="Email address" required></input>
      </div>
      <div className={classes.form__input}>
        <textarea type="text" placeholder="Message" rows={5} required></textarea>
      </div>
      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
