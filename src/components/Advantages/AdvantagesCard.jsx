import React from 'react';
import CardList from './CardList/CardList';
import { cards } from '../../Data/CardsData';
import './AdvantagesCard.scss'
import { motion } from 'framer-motion';

 const AdvantagesCard = () => {
  return (
      <motion.section className="advantages"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once:true}}
      >
        <div className="container">
          <div className="advantages__content">
            <CardList cards={cards} />
          </div>
        </div>
      </motion.section>
  );
};

export default AdvantagesCard;