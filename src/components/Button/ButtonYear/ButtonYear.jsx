import React from 'react';
import './ButtonYear.scss';

const ButtonYear = () => {
  return (
    <>
      <button className='btn-year'>
          1 Year <p>-</p> <span>$139</span>
      </button>
      <button className='btn-year'>
          2 Year <p>-</p> <span>$209</span>
      </button>
      <button className='btn-year'>
          3 Year <p> - </p> <span>$279</span>
      </button>
    </>
  )
}

export default ButtonYear