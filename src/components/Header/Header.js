import React from 'react'
import hamburger from '../../photos/hamburger.png'
import youtube from '../../photos/youtube.png'
import search from '../../photos/search.png'
import bell from '../../photos/bell.png'
import camera from '../../photos/camera.png'
import mic from '../../photos/mic.png'
import profile from '../../photos/profile.png'

import './header.css'

function Header() {
  return (
    <div className='header'>
    <div className='headerLeft'>
        <div className='hamburgerContainer'><img src={hamburger} className='hamburger' ></img></div>
        <div className='logoContainer'><img src={youtube} className='youtube' ></img></div>
    </div>
    <div className='headerMiddle'>
        <div className='inputBox'><input type="text" placeholder='    Search' className='searchBox'></input></div>
        <div className='searchContainer'><img src={search} className='search'></img></div>
    
    </div>
    <div className='headerRight'>
        <div className='icon'><img src={mic} className='mic'></img></div>
        <div className='icon'><img src={camera} className='camera'></img></div>
        <div className='icon'><img src={bell} className='bell'></img></div>
        <div className='icon'><img src={profile} className='profile'></img></div>
    </div>    
    </div>
  )
}

export default Header
