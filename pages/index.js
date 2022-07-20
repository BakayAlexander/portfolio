import { Fragment } from 'react';
import About from '../components/UI/About/About';
import Profile from '../components/UI/Profile/Profile';
import Services from '../components/UI/Services/Services';
export default function Home() {
  return (
    <Fragment>
      <Profile />
      <Services />
      <About />
    </Fragment>
  );
}
