import React from 'react';
import './Braking.scss';
import BrakingImg from '../../images/bracing-system/1.png';
import { motion } from 'framer-motion';

const Braking = () => {
  return (
    <motion.section className="braking"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="braking__content">
            <div className="braking__image">
                <img src={BrakingImg} alt="" />
            </div>
            <div className="container">
                <motion.div className="braking__text"
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <div className="braking__text__title">
                        <h2>DUAL BRAKING SYSTEM</h2>
                    </div>
                    <div className="braking__text__description">
                        <span>Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability.</span>
                        <p>*IPX5 water resistance</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Braking