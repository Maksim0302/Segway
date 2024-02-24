import React from 'react';
import './Specifications.scss';
import { SpecificationsData } from '../../Data/SpecificationsData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

const Specifications = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  return (
    <motion.section className="specifications"
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
      viewport={{once:true}}
    >
      <div className="container">
        <div className="specifications__text">
          <div className="specifications__text__title">
            <h1>COMPARE SPECIFICATIONS</h1>
          </div>
          <div className="specifications__text__subtitle">
            <span>Add model to compare</span>
          </div>
        </div>
        <div className="specifications__content">
      <Slider  {...settings}>
        {SpecificationsData.map((data, index) => (
          <div className="specifications__box" key={index} >
            <div className="specifications__box__head">
              <div className="specifications__box__head__image">
                <img src={data.imgUrl} alt="" />
              </div>
              <div className="specifications__box__head__name">
                <h3>{data.name}</h3>
              </div>
            </div>
            <div className="specifications__box__body">
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg1} alt="" />
                  <span>{data.meaning1}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc1}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg2} alt="" />
                  <span>{data.meaning2}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc2}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg3} alt="" />
                  <span>{data.meaning3}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc3}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg4} alt="" />
                  <span>{data.meaning4}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc4}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg5} alt="" />
                  <span>{data.meaning5}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc5}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg6} alt="" />
                  <span>{data.meaning6}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc6}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg7} alt="" />
                  <span>{data.meaning7}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc7}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg8} alt="" />
                  <span>{data.meaning8}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc8}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg9} alt="" />
                  <span>{data.meaning9}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc9}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg10} alt="" />
                  <span>{data.meaning10}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc10}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg11} alt="" />
                  <span>{data.meaning11}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc11}</span>
                </div>
              </div>
              <div className="specifications__box__body__content">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg12} alt="" />
                  <span>{data.meaning12}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc12}</span>
                </div>
              </div>
              <div className="specifications__box__body__content specifications__box__body__content_back">
                <div className="specifications__box__body__content__meaning">
                  <img src={data.iconImg13} alt="" />
                  <span>{data.meaning13}</span>
                </div>
                <div className="specifications__box__body__content__description">
                  <span>{data.desc13}</span>
                </div>
              </div>
            </div>
            <div className="specifications__box__price">
              <span>{data.price}</span>
            </div>
            <div className="specifications__box__button">
              <button className='specifications__box__button-btn'>{data.btn}</button>
            </div>
          </div>
          ))}
        </Slider>
        </div>
      </div>
    </motion.section>
  )
}

export default Specifications;
