import React from 'react';
import './Packing.scss';
import PackingImg from '../../images/complekt/image.png';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Packing = () => {

  return (
    <motion.section className="packing"
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="packing__title packing__mobile__title">
                PACKING LIST
            </div>
            <div className="packing__content">
                <div className="packing__content__left">
                    <div className="packing__content__left__title packing__title">
                        PACKING LIST
                    </div>
                    <div className="packing__content__left__video">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=9fgxm4NFNa0"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
                <div className="packing__content__right">
                    <div className="packing__content__right__image">
                        <img src={PackingImg} alt="PackingImg" />
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Packing;


