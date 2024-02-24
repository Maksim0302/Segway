import React from 'react';
import './Kickscooter.scss';
import ButtonInStock from '../Button/ButtonInStock/ButtonInStock';
import ButtonYear from '../Button/ButtonYear/ButtonYear';
import {ButtonCart1, ButtonCart2} from '../Button/ButtonCart/ButtonCart';
import ImageEcip from '../../images/slide/left.png';
import Starting from '../../images/slide/payment/starting/starting.png';
import KickscooterImg from '../../images/segway-minebot/image-right.png';
import KickscooterMobileImg from '../../images/segway-minebot/mobile.png';
import { motion } from 'framer-motion';
import { MethodsImgData } from '../../Data/MethodsImgData';

const Kickscooter = () => {
  return (
    <motion.section className='payment'
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
    >
        <div className="container">
            <div className="payment__content">
                <div className="payment__content__mobile">
                    <div className="payment__content__mobile__button payment__button">
                        <ButtonInStock/>
                    </div>
                    <div className="payment__title">
                        <h1 className='payment__title__text'>
                            SEGWAY NINEBOT KICKSCOOTER MAX
                        </h1>
                    </div>
                        <div className="payment__slider">
                        <div className="payment__image">
                            <img className='payment__image__product' src={KickscooterMobileImg} alt='' />
                        </div>
                        </div>
                    <div className="payment__mobile__cart">
                        <div className="payment__mobile__cart__text">
                            <div className="payment__mobile__cart__text__title">
                                SEGWAY PROTECTIVE GEAR SET AS A GIFT
                            </div>
                            <div className="payment__mobile__cart__text__description">
                                The cost of a protection kit when buying a scooter is $0 instead of $29.99
                            </div>
                        </div>
                            <div className="payment__mobile__cart__image">
                                <img src={ImageEcip} alt="ImageEcip" />
                            </div>
                    </div>
                    <div className="payment__cart">
                        <div className="payment__cart__top">
                            <div className="payment__cart__top__title">
                                Add an extended warranty from <span>Extend</span>
                            </div>
                            <div className="payment__cart__top__button">
                                <ButtonYear/>
                            </div>
                        </div>
                        <div className="payment__cart__center">
                            <div className="payment__cart__center__price">
                                <div className="payment__cart__center__price__old">
                                    $1049.99
                                </div>
                                <div className="payment__cart__center__price__new">
                                    $949.99
                                </div>
                            </div>
                        </div>
                        <div className="payment__cart__bottom">
                            <ButtonCart1/>
                            <ButtonCart2/>
                        </div>
                    </div>
                    <div className="payment__methods">
                        <div className="payment__methods__text">
                            Payment Methods:
                        </div>
                        <div className="payment__methods__image">
                            {MethodsImgData.map((id,index) => (
                                <div className="methods__image" key={index} >
                                    <div className="methods__image__img">
                                        <img className='box__image' src={id.imgUrl} alt='' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className='payment__methods__text_blue'>Starting at $55/mo with <img src={Starting} alt="" />.</span> 
                        <span className='payment__methods__text_green'>Prequalify now</span>
                    </div>
                </div>
                <motion.div className="payment__content__left"
                    initial={{opacity: 0, x: -80}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2}}
                    viewport={{once:true}}
                >
                    <div className="payment__button">
                        <ButtonInStock/>
                    </div>
                    <div className="payment__title">
                        <h1 className='payment__title__text'>
                            SEGWAY NINEBOT KICKSCOOTER MAX
                        </h1>
                    </div>
                    <div className="payment__cart">
                        <div className="payment__cart__top">
                            <div className="payment__cart__top__title">
                                Add an extended warranty from <span>Extend</span>
                            </div>
                            <div className="payment__cart__top__button">
                                <ButtonYear/>
                            </div>
                        </div>
                        <div className="payment__cart__center">
                            <div className="payment__cart__center__price">
                                <div className="payment__cart__center__price__old">
                                    $1049.99
                                </div>
                                <div className="payment__cart__center__price__new">
                                    $949.99
                                </div>
                            </div>
                            <div className="payment__cart__center__description">
                                Segway Protective <br /> Gear Set as a gift
                            </div>
                            <div className="payment__cart__center__image">
                                <img src={ImageEcip} alt="ImageEcip" />
                            </div>
                        </div>
                        <div className="payment__cart__bottom">
                            <ButtonCart1/>
                            <ButtonCart2/>
                        </div>
                    </div>
                    <div className="payment__methods">
                        <div className="payment__methods__text">
                            Payment Methods: <span className='payment__methods__text_blue'>Starting at $55/mo with <img src={Starting} alt="" />.</span> <span className='payment__methods__text_green'>Prequalify now</span>
                        </div>
                        <div className="payment__methods__image">
                            {MethodsImgData.map((id,index) => (
                                <div className="methods__image" key={index} >
                                    <div className="methods__image__img">
                                        <img className='box__image' src={id.imgUrl} alt='' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div className="payment__content__right"
                     initial={{opacity: 0, scale: 0.5}}
                     whileInView={{opacity: 1, scale: 1}}
                     transition={{duration: 2}}
                     viewport={{once:true}}
                >
                    <div className="payment__slider" >
                    <div className="payment__image">
                        <img className='payment__image__product' src={KickscooterImg} alt='' />
                    </div>
                    </div>  
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default Kickscooter