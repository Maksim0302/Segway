import React from 'react';
import './Reviews.scss';
import { ReviewsData } from '../../Data/ReviewsData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

const Reviews = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 698,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      };

  return (
    <motion.section className="reviews" id='reviews'
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
      viewport={{once:true}}
    >
        <div className="container">
            <div className="reviews__title">
                <h1>REVIEWS</h1>
            </div>
            <div className="reviews__content">
                <Slider  {...settings}>
                    {ReviewsData.map((data, index) => (
                        <div className="reviews__box" key={index} >
                            <div className="reviews__box__item">
                                <img src={data.imgUrl} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </motion.section>
  )
}

export default Reviews;