import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import classes from './testimonial.module.css';
import networkImg from '../../../public/images/connected-world.png';
import Image from 'next/image';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import TestimonialItem from '../TestimonialItem/TestimonialItem';
import { testimonialsData } from '../../data/testimonials';

const Testimonial = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    if (window.screen.width < 1000) {
      setShowArrows(false);
    }
  }, []);

  const sliderSettings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={classes.testimonial__image}>
            <Image src={networkImg} alt="network image" width="400" height="400" />
          </Col>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says <span>(just joking)</span></h4>
            <Slider {...sliderSettings}>
              {testimonialsData.map(testimonial => (
                <TestimonialItem
                  key={testimonial.id}
                  author={testimonial.author}
                  position={testimonial.position}
                  text={testimonial.text}
                  image={testimonial.image}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
