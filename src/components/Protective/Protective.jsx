import React from 'react';
import './Protective.scss';
import ProtectiveImg from '../../images/segway-protective/1.png';
import { motion } from 'framer-motion';

const Protective = () => {
  return (
    <motion.section className="protective"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="protective__content">
                <motion.div className="protective__image"
                    initial={{opacity: 0, x: -80}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <img src={ProtectiveImg} alt="" />
                </motion.div>
                <motion.div className="protective__text"
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <div className="protective__text__title">
                        <h2>SEGWAY PROTECTIVE GEAR SET AS A GIFT</h2>
                    </div>
                    <div className="protective__text__description">
                        <p>The cost of a protection kit when buying a scooter is $ 0 instead of $ $29.99</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Protective;