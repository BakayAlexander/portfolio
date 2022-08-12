import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Modal from '../components/Modal/Modal';
import About from '../components/UI/About/About';
import Contact from '../components/UI/Contact/Contact';
import Portfolio from '../components/UI/Portfolio/Portfolio';
import Profile from '../components/UI/Profile/Profile';
import Services from '../components/UI/Services/Services';
import Testimonial from '../components/UI/Testemonial/Testimonial';
import { useRecoilState } from 'recoil';
import { modalState } from '../recoil/modalAtom';

export default function Home() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  return (
    <>
      <Head>
        <title>Alexander Bakay</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a portfolio of Alexander Bakay web-developer. Build with Next.js." />
      </Head>
      <Profile />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      {modalOpen && (
        <AnimatePresence>
          <Modal />
        </AnimatePresence>
      )}
    </>
  );
}
