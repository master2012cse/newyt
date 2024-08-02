import React from 'react'
import './Sidebar.css'
import home from '../../assets/icons8-home-24.png'
import game from '../../assets/icons8-game-50.png'
import automobiles from '../../assets/icons8-automobile-30.png'
import sports from '../../assets/icons8-sport-50.png'
import music from '../../assets/icons8-music-50.png'
import blog from '../../assets/icons8-blog-30.png'
import news from '../../assets/icons8-news-50.png'
import tech from '../../assets/icons8-tech-30.png'
import tom from '../../assets/icons8-tom-48.png'
import entertainment from '../../assets/icons8-entertainment-50.png'
import jack from '../../assets/icons8-subscribe-24.png'
import avatar from '../../assets/icons8-navi-avatar-48.png'



const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='sortcut-links'>
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game} alt="" /><p>Game</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blog} alt="" /><p>Blog</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Tech</p>
            </div>
            <hr/>
        </div>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={jack} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={avatar} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={jack} alt="" /><p>RDER</p>
            </div>
            <div className='side-link'>
                <img src={avatar} alt="" /><p>RDER</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
