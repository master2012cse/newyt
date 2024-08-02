import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo_icon from '../../assets/logo.png'
import search from '../../assets/icons8-search-50.png'
import upload from '../../assets/icons8-upload-50.png'
import more from '../../assets/icons8-more-30.png'
import notification from '../../assets/icons8-notification-50.png'
import profile from '../../assets/icons8-test-account-50.png'
import { Link } from 'react-router-dom'




const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <Link to='/' ><img className='logo' src={logo_icon} alt="" /> </Link>      
         </div>

         <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
                <input type="text" placeholder='Search'/>
                <img src={search} alt="" />
            </div>
         </div>


         <div className='nav-right flex-div'>
            <img src={upload} alt="" />
            <img src={more} alt="" />
            <img src={notification} alt="" />
            <img src={profile} alt="" className='user-icon'/>
         </div>
      
    </nav>
  )
}

export default Navbar
