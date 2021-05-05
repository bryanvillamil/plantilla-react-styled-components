import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Icon from '../../atoms/Icons';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { SliderContainer, Arrow } from './styledComponents';

const PrevArrow = ({ onClick }) => (
  <Arrow className="prev__arrow" onClick={onClick}>
    <Icon iconName="arrow" width={65} height={65} backgroundColor="#562E91" />
  </Arrow>
)

const NextArrow = ({ onClick }) => (
  <Arrow className="next__arrow" onClick={onClick}>
    <Icon iconName="arrow" width={65} height={65} backgroundColor="#562E91" />
  </Arrow>
)

const Carousel = props => {
  const {
    children,
    autoplay,
    fade,
    slidesToShow,
    dots,
  } = props;

  const settings = {
    speed: 750,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          rows: 2,
        }
      }
    ]
  }

  return (
    <SliderContainer>
      <Slider 
        {...settings}
        autoplay={autoplay}
        arrows={true}
        fade={fade}
        slidesToShow={slidesToShow}
        dots={dots}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {children}
      </Slider>
    </SliderContainer>
  )
}

Carousel.defaultProps = {
  autoplay: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  fade: false,
}

Carousel.propTypes = {
  responsive: PropTypes.array,
  fade: PropTypes.bool
}

export default Carousel;
