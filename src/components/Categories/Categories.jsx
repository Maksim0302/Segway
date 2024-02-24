import React from 'react';
import './Categories.scss';
import { motion } from 'framer-motion';
import { CategoriesData } from '../../Data/CategoriesData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
    ]
  };

  return (
    <section className='categories'>
      <div className="container">
        <motion.div className="categories__content" 
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
          viewport={{once:true}}
        >
          <div className="categories__content categories__content__desctop">
            {CategoriesData.map((data, index) => (
                <div className="categories__box" key={index} >
                  <div className="categories__box__image">
                    <img className='box__image' src={data.imgUrl} alt='' />
                  </div>
                  <span className='box__name'>{data.name}</span>
                </div>
              ))}
          </div>
          <div className="categories__content__slider">
            <Slider  {...settings}>
              {CategoriesData.map((data, index) => (
                <div className="categories__box" key={index} >
                  <div className="categories__box__image">
                    <img className='box__image' src={data.imgUrl} alt='' />
                  </div>
                  <span className='box__name'>{data.name}</span>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
      <div className="categories__shipping">
        <div className="categories__shipping__content">
          FREE 1 DAY SHIPPING WITHIN CALIFORNIA.
        </div>
      </div>
    </section>
  )
}

export default Categories;