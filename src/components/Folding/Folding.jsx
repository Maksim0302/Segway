import React from 'react';
import './Folding.scss';
import FoldingImg from '../../images/folding-mechanism/1.png';
import { motion } from 'framer-motion';

const Folding = () => {
  return (
    <motion.section className="folding"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="folding__content">
            <motion.div className="folding__text"
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 2}}
                viewport={{once:true}}
            >
                <div className="folding__text__title">
                    <h2>DUAL BRAKING SYSTEM</h2>
                </div>
                <div className="folding__text__description">
                    <span>Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability.</span>
                </div>
            </motion.div>
            <div className="folding__image">
                <img src={FoldingImg} alt="" />
            </div>
        </div>
    </motion.section>
  )
}

export default Folding;