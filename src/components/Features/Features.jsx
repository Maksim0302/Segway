import React from 'react';
import './Features.scss';
import FeaturesImage from '../../images/features/bacgraund/1.png';
import { FeaturesData } from '../../Data/FeaturesData';
import { motion } from 'framer-motion';


const Features = () => {
  return (
    <motion.section className="features"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="features__image">
            <img src={FeaturesImage} alt="" />
        </div>
        <div className="container">
            <div className="features__title">
                <h1>IMPRESSIVE FEATURES</h1>
            </div>
            <motion.div className="features__content"
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 2}}
                viewport={{once:true}}
            >
            {FeaturesData.map((data,index) => (
                <div className="features__box" key={index} >
                    <div className="features__box__image">
                        <img src={data.imgUrl} alt={data.title} />
                    </div>
                    <div className="features__box__title">
                        <h2>{data.title}</h2>
                    </div>
                    <div className="features__box__description">
                        <span>{data.description}</span>
                    </div>
                </div>
            ))}
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Features