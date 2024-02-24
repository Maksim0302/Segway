import React from 'react';
import './Manual.scss';
import { ManualData } from '../../Data/ManualData';
import ManualImg from '../../images/download-manual/mocap.png';
import DownloadIcon from '../../images/download-manual/button-icons.png';
import { motion } from 'framer-motion';

const Manual = () => {
  return (
    <motion.section className="manual"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="manual__content">
                <div className="manual__left">
                    <div className="manual__left__image">
                        <img src={ManualImg} alt="" />
                    </div>
                </div>
                <motion.div className="manual__right"
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <div className="manual__right__top">
                        <div className="manual__right__top__text">
                            <h2>DOWNLOAD MANUAL</h2>
                        </div>
                    </div>
                    <div className="manual__right__center">
                        {ManualData.map((data, index) => (
                        <div className="manual__right__center__item" key={index}>
                            <div className="manual__right__center__item__image">
                                    <img src={data.imgUrl} alt="" />
                            </div>
                            <div className="manual__right__center__item__text">
                                    <span>{data.description}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="manual__right__bottom">
                        <button className='manual__bottom__btn'>
                            <span>DOWNLOAD MANUAL</span>
                            <img src={DownloadIcon} alt="" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Manual;