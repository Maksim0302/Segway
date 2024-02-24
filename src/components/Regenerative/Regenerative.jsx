import React from 'react';
import './Regenerative.scss';
import RegenerativeDescImg from '../../images/regenerative/desctop.png';
import RegenerativeMobileImg from '../../images/regenerative/mobile.png';
import { motion } from 'framer-motion';

const Regenerative = () => {
  return (
    <motion.section className="regenerative"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
            <div className="regenerative__image">
            <div className="regenerative__image__desctop">
                <img src={RegenerativeDescImg} alt="" />
            </div>
            <div className="regenerative__image__mobile">
                <img src={RegenerativeMobileImg} alt="" />
            </div>
        </div>
        <motion.div className="regenerative__text"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            viewport={{once:true}}
        >
            <div className="regenerative__text__title">
                <h2>REGENERATIVE BRAKE FOR POWER RECYCLE</h2>
            </div>
            <div className="regenerative__text__description">
                <p>The innovative regenerative brake system turns Ninebot KickScooter MAX into an electric vehicle powered by electricity and recycled energy from riding. Energy will be collected from regenerative braking and distributed when you need a boost.</p>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Regenerative;