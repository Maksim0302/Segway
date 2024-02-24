import React from 'react';
import './Control.scss';
import ControlMobileImg from '../../images/control-smartphone/app 1.png';
import { ControlData } from '../../Data/ControlData';
import ControlStoreButton from '../../images/control-smartphone/AppStore.png';
import ControlPlayButton from '../../images/control-smartphone/GP.png';
import { motion } from 'framer-motion';

const Control = () => {
  return (
    <motion.section className="control" id='control'
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="control__text">
                <div className="control__text__title">
                    <h1>CONTROL FROM YOUR SMARTPHONE</h1>
                </div>
                <div className="control__text__description">
                    <p>You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being the key to the kickscooter, it will give a signal in case of an attempt to steal. Check the current speed, data on the status of the device's systems or set the speed limit with a few touches.
                        And the skating training program is indispensable for beginners.
                    </p>
                </div>
            </div>
            <div className="control__content">
                <motion.div className="control__content__left"
                    initial={{opacity: 0, x: -80}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <div className="control__content__left__block">
                        {ControlData.map((data, index) => (
                            <div className="control__content__left__block__box" key={index}>
                                    <div className="control__content__left__block__box__image">
                                        <img src={data.imgUrl} alt="" />
                                    </div>
                                    <div className="control__content__left__block__box__name">
                                        <span>{data.name}</span>
                                    </div>
                                </div>
                        ))}
                     </div>
                       
                    <div className="control__content__left__button">
                        <button className='store'><img src={ControlStoreButton} alt="" /></button>
                        <button className='play'><img src={ControlPlayButton} alt="" /></button>
                    </div>
                </motion.div>
                <motion.div className="control__content__right"
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <img src={ControlMobileImg} alt="" />
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Control