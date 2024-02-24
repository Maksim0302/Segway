import React from 'react';
import './Built.scss';
import BuiltDesctopImg from '../../images/built/desctop.png';
import BuiltMobileImg from '../../images/built/mobile.png';
import { motion } from 'framer-motion';


const Built = () => {
  return (
    <motion.section className="built"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="built__image">
            <div className="built__image__desctop">
                <img src={BuiltDesctopImg} alt="" />
            </div>
            <div className="built__image__mobile">
                <img src={BuiltMobileImg} alt="" />
            </div>
        </div>
        <motion.div className="built__text"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            viewport={{once:true}}
        >
            <div className="built__text__title">
                <h2>BUILT-IN FRONT LED LIGHT</h2>
            </div>
            <div className="built__text__description">
                <span>Front-facing lights are designed with 2.5w high-brightness LED light to illuminate the path ahead of you and increase your visibility to others around you.</span>
                <p>*Disclaimer: for your safety, please try not to ride at night</p>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Built