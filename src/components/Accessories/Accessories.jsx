import React from 'react';
import './Accessories.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ButtonMore from '../Button/ButtonMore/ButtonMore';
import { motion } from 'framer-motion';
import { storeData } from '../../Data/AccessoriesData';
import Product from '../BascetComponent/Product';

const Accessories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <motion.section className="accessories"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="accessories__title">
                <h1>ACCESSORIES</h1>
            </div>
            <div className="accessories__content cards">
                <div className="accessories__desctop">
                    {storeData.map((item, i) => 
                        <Product
                            key={i}
                            item={item}
                        />
                    )}
                </div>
                <Slider className='accessories__slider' {...settings}>
                    {storeData.map((item, i) => 
                        <Product
                            key={i}
                            item={item}
                        />
                    )}
                </Slider>
            </div>
            <div className="accessories__btn-more">
              <ButtonMore />
            </div>
        </div>
    </motion.section>
  )
}

export default Accessories;
