import React from 'react'
import './sideNav.css'
import home from '../../photos/home.png'
import shorts from '../../photos/shorts.png'
import subscription from '../../photos/subscription.png'
import history from '../../photos/history.png'
import yourVideos from '../../photos/yourVideos.png'
import watchLater from '../../photos/watchLater.png'
import likedVideos from '../../photos/likedVideos.png'
import library from '../../photos/library.png'


function SideNav() {
  return (
    <div className='parent'>

    <div className='row home'>
        <div className='icon'><img src={home} className='homeIcon' ></img></div>
        <div className='menu'>Home</div>
    </div>

    <div className='row shorts'>
        <div className='icon'><img src={shorts} className='shortsIcon'></img></div>
        <div className='menu'>Shorts</div> 
    </div>

    <div className='row subscription'>
        <div className='icon'><img src={subscription} className='subscriptionIcon'></img></div>
        <div className='menu'>subscription</div>
    </div>

    <div className='row library'>
        <div className='icon'><img src={library} className='libraryIcon'></img></div>
        <div className='menu'>Library</div>
    </div>

    <div className='row history'>
        <div className='icon'><img src={history} className='historyIcon'></img></div>
        <div className='menu'>History</div>
    </div>

    <div className='row yourVideos'>
        <div className='icon'><img src={yourVideos} className='yourVideosIcon'></img></div>
        <div className='menu'>Your Videos</div>
    </div>

    <div className='row watchLater'>
        <div className='icon'><img src={watchLater} className='watchLaterIcon'></img></div>
        <div className='menu'>Watch Later</div>
    </div>
    
    <div className='row likedVideos'>
        <div className='icon'><img src={likedVideos} className='likedVideosIcon'></img></div>
        <div className='menu'>Liked Videos</div>
    </div>
      
    </div>
  )
}

export default SideNav
