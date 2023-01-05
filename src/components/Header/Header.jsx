import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Header = () => {

  const mobile= window.innerWidth<768 ? true:false;
  const [menuOpened,setMenuOpened] = useState(false);
  
  return (
    <div className="Header">
      <div className='stroke-text'> GymDesk</div>

  {(menuOpened === false && mobile === true) ? (
    <div style={{
                padding:'1rem',
                borderRadius:'5px'
}}

onClick={()=> setMenuOpened(true)}


><img src={Bars} alt="" style={{
      width:'1.5rem', height: '1.5rem'
    }}/></div>
  ):   
  <ul className='header-menu'>
  <li > 
  <Link onClick={()=>setMenuOpened(false)} 
  onClick={()=>setMenuOpened(false)} 
  to='home'
  span={true}
  smooth={true}
  activeClass= 'active'
  >Home</Link>
  
  </li>
  <li> <Link  onClick={()=>setMenuOpened(false)} 
   to='programs'
   span={true}
   smooth={true}

   >Programs</Link></li>

  <li><Link  onClick={()=>setMenuOpened(false)} 
  to='Reasons'
  span={true}
  smooth={true}
  
  >Why us</Link>
    </li>


  <li><Link  onClick={()=>setMenuOpened(false)} 
   to='Plans'
   span={true}
   smooth={true}
  
  >Plans</Link>  
    </li>
  <li>
    <Link
     onClick={()=>setMenuOpened(false)} 
    to='Testimonials'
    span={true}
    smooth={true}
    >Testimonials</Link>
    </li>
  </ul> }
 
   
   </div>
  )
}

export default Header
