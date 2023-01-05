import React from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span >what they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            
        </div>



        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="USER IMAGE" />




           
        </div>

    </div>
  )
}

export default Testimonials
