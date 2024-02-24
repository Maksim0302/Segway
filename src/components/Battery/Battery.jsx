import React from 'react';
import './Battery.scss';
import BatteryDesctopImg from '../../images/battery/1.png';
import BatteryMobileImg from '../../images/battery/mobile.png';
import { motion } from 'framer-motion';

const Battery = () => {
  return (
    <motion.section className="battery" id='battery'
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="battery__image">
            <div className="battery__image__desctop">
                <img src={BatteryDesctopImg} alt="" />
            </div>
            <div className="battery__image__mobile">
                <img src={BatteryMobileImg} alt="" />
            </div>
        </div>
        <motion.div className="battery__text"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            viewport={{once:true}}
        >
            <div className="battery__text__title">
                <h2>SMART BATTERY MANAGEMENT SYSTEM (SMART-BMS)</h2>
            </div>
            <div className="battery__text__description">
                <p>The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability</p>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Battery