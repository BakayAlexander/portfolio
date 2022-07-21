import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import classes from './testimonial.module.css';
import networkImg from '../../../public/images/connected-world.png';
import Image from 'next/image';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';

const Testimonial = () => {
  const sliderSettings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <Image src={networkImg} alt="network image" width="400" height="400" />
          </Col>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>
            <Slider {...sliderSettings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image src="/images/hero.jpeg" alt="client-image" width="50" height="50" className="rounded-2" />
                  <div>
                    <h6>John Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe voluptates modi ad, sed aliquid
                  ipsum in quis eos libero et corrupti similique praesentium dignissimos ratione adipisci. Nulla, nam
                  doloremque?
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image src="/images/hero.jpeg" alt="client-image" width="50" height="50" className="rounded-2" />
                  <div>
                    <h6>Jeff Bezos</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe voluptates modi ad, sed aliquid
                  ipsum in quis eos libero et corrupti similique praesentium dignissimos ratione adipisci. Nulla, nam
                  doloremque?
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image src="/images/hero.jpeg" alt="client-image" width="50" height="50" className="rounded-2" />
                  <div>
                    <h6>Patrick Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe voluptates modi ad, sed aliquid
                  ipsum in quis eos libero et corrupti similique praesentium dignissimos ratione adipisci. Nulla, nam
                  doloremque?
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
