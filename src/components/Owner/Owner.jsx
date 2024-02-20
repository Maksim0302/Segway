import React from 'react';
import './Owner.scss';
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png';

const Owner = () => {
  return (
    <section className="owner">
        <div className="container">
            <div className="owner__content">
                <div className="owner__logo">
                    <a href='#logo'>
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="owner__avatar">
                    <div className="owner__avatar__image">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="owner__avatar__text">
                        <div className="owner__avatar__text__name">
                            JOHN SMITH
                        </div>
                        <div className="owner__avatar__text__description">
                            Ask a question <br /> to the director
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Owner;