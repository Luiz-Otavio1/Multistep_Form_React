import React from 'react';
import './Step.css';

// Components
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const Step = ({ currentStep }) => {
  return (
    <div className='steps'>
      <div className='step active'>
        <AiOutlineUser />
        <p>identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <AiOutlineStar />
        <p>identificação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <FiSend />
        <p>identificação</p>
      </div>
    </div>
  );
};

export default Step;
