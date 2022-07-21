import { Fragment } from 'react';
import About from '../components/UI/About/About';
import Contact from '../components/UI/Contact/Contact';
import Portfolio from '../components/UI/Portfolio/Portfolio';
import Profile from '../components/UI/Profile/Profile';
import Services from '../components/UI/Services/Services';
import Testimonial from '../components/UI/Testemonial/Testimonial';
export default function Home() {
  return (
    <Fragment>
      <Profile />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
