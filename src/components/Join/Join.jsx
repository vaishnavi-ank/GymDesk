import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kwewivo', 'template_ep54ghb', form.current, '9PuD26qUCQmFeX9eh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
    <div className="join" id="join-us">

        <div className="left-j">
            <hr/>
            <div>
                <span >READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span>WITH US?</span>
            </div>


        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your Email address' />
                <button className='btn btn-j'>Contact Us</button>

           
            </form>



        </div>
    </div>
    
  )
}

export default Join
