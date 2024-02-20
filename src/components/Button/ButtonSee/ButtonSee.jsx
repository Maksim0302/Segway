import React, { useState } from 'react';
import './ButtonSee.scss'; // Создайте файл ButtonComponent.css для стилей

const ButtonSee = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`custom-button ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      SEE MORE
    </button>
  );
};

export default ButtonSee;