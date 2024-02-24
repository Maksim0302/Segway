import React from 'react';
import './Riding.scss';
import RidingDescImg from '../../images/riding/desctop.png';
import RidingMobileImg from '../../images/riding/mobile.png';
import { motion } from 'framer-motion';

const Riding = () => {
  return (
    <motion.section className="riding"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="riding__image">
            <div className="riding__image__desctop">
                <img src={RidingDescImg} alt="" />
            </div>
            <div className="riding__image__mobile">
                <img src={RidingMobileImg} alt="" />
            </div>
        </div>
        <motion.div className="riding__text"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            viewport={{once:true}}
        >
            <div className="riding__text__title">
                <h2>3 RIDING MODES</h2>
            </div>
            <div className="riding__text__description">
                <p>Eco, Standard, and Sports modes can be directly accessed by the intuitive LED dashboard, which also displays maintenance signals, power levels, Bluetooth connectivity and more.</p>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Riding;