import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
const Hero = () => {
    const mobile= window.innerWidth<768 ? true:false;
  return (
    <div className="hero" id='home'>
        <div ></div>
<div className="left-h">
    <Header/>
    {/* the best ad*/}
    <div className="the-best-ad">
        <div>

        </div>
        <span>the best fitness club in the town</span>
    </div>


    {/* hero heading*/}
    <div className="hero-text">
        <div>
            <span >Shape </span>
            <span>Your</span></div>

        <div><span>Ideal Body</span></div>
    <div>
        <span>In here we will help you to shape and build your ideal body and live up your life to</span>
    </div>
    </div>
    

{/* figures*/}
<div className="figures">
    <div>
        <span>+140</span>
        <span>expert coaches</span>
    </div>
    <div>
        <span>+987</span>
        <span>members joined</span>
    </div>
    <div>
        <span>+50</span>
        <span>fitness programs</span>
    </div>
</div>
    
    {/* hero buttons*/}
    <div className="hero-buttons">
        <button className="btn">Get started</button>
        
    </div>
</div>
<div className="right-h">

    <button className='btn'>Join now</button>

   
 {/* hero images*/}
 <img src={hero_image} alt="" className='hero-image' />
  


</div>
    </div>
  )
}

export default Hero
