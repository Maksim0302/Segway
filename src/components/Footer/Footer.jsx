import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import logo from '../../images/logo-footer.png';

const Footer = () => {
  return (
    <motion.section className="footer" id='footer'
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="footer__content">
                <div className="footer__content__left">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__content__right">
                    <div className="footer__content__right__phone">
                        <a href="tel:+1(888)888-88-88">+1(888)888-88-88</a>
                    </div>
                    <div className="footer__content__right__fax">
                        <span>2637 Fairfax Ave Culver City, CA 90232</span>
                    </div>
                    <div className="footer__content__right__copy">
                        <span>Segway  California © 2024</span>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Footer