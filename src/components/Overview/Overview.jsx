import React from 'react';
import './Overview.scss';
import OverviewDescImg from '../../images/overvi/1.png';
import OverviewMobImg from '../../images/overvi/mobile.png';
import { OverviewData } from '../../Data/OverviewData';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <motion.section className="overview"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="overview__title">
                <h1 className='overview__title__top'>
                    KICKSCOOTER OVERVIEW 
                </h1>
                <h1 className='overview__title__bottom'>SEGWAY NINEBOT KICKSCOOTER MAX</h1>
            </div>
            <div className="overview__content">
                <div className="overview__desctop">
                    <img src={OverviewDescImg} alt="" />
                </div>
                <div className="overview__mobile" >
                    <img src={OverviewMobImg} alt="" />
                    <motion.div className="overview__mobile__box" 
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 2}}
                        viewport={{once:true}}
                    >
                        {OverviewData.map((data, index) => (
                            <div className="overview__mobile__box__item" key={index}>
                                <span>{data.number}</span>
                                <span>{data.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Overview