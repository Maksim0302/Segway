import React from 'react';
import './Charging.scss';
import ChargingImg from '../../images/charging/1.png';
import { motion } from 'framer-motion';

const Charging = () => {
  return (
    <motion.section className="charging"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
            <div className="container">
                <div className="charging__content">
                    <div className="charging__image">
                        <img src={ChargingImg} alt="" />
                    </div>
                    <motion.div className="charging__text"
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 2}}
                        viewport={{once:true}}
                    >
                        <div className="charging__text__title">
                            <h2>EASY ONE CORD FAST CHARGING</h2>
                        </div>
                        <div className="charging__text__description">
                            <p>The built-in charger lets riders recharge it easily when on the go without having to carry along a bulky charging adapter. 3A fast charge will give Ninebot KickScooter MAX a full charge in 6 hours.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
    </motion.section>
  )
}

export default Charging