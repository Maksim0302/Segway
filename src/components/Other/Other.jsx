import React from 'react';
import './Other.scss';
import { OtherData } from '../../Data/OtherData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ButtonSee from '../Button/ButtonSee/ButtonSee';
import { motion } from 'framer-motion';

const Other = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  
  };

  return (
    <motion.section className="other"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="other__text">
                <div className="other__text__title">
                    <h1>OTHER MODELS</h1>
                </div>
                <div className="other__text__description">
                    <p>Check out the entire line of Segway scooters</p>
                </div>
            </div>
            <div className="other__content">
            {OtherData.map((data, index) => (
                <div className="other__box other__box-desctop" key={index}>
                    <div className="other__box__image">
                        <img src={data.imgUrl} alt={data.name} />
                    </div>
                    <div className="other__box__text">
                        <div className="other__box__text__name">
                            <h2>{data.name}</h2>
                        </div>
                        <div className="other__box__text__price">
                            <span>
                                {data.price}
                            </span>
                        </div>
                    </div>
                    <div className="other__box__button">
                        <ButtonSee/>
                    </div>
                </div>
                ))}
                <Slider className='other-slider'  {...settings}>
                    {OtherData.map((data, index) => (
                        <div className="other__box other__box-mobile" key={index}>
                            <div className="other__box__image">
                                <img src={data.imgUrl} alt={data.name} />
                            </div>
                            <div className="other__box__text">
                                <div className="other__box__text__name">
                                    <h2>{data.name}</h2>
                                </div>
                                <div className="other__box__text__price">
                                    <span>
                                        {data.price}
                                    </span>
                                </div>
                            </div>
                            <div className="other__box__button">
                                <ButtonSee/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </motion.section>
  )
}

export default Other;