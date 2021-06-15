import React from 'react';
import '../../css/mainpage/Sidebar.css';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
//1:28:00
function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <MenuIcon style={{fill:  "#5c5b5b", marginLeft: "10px"}} />
            </div>
            <div className="sidebar__icons">
                <div className="sidebar__icon ">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className="sidebar__icon">
                    <ExploreIcon/>
                    <p>Explore</p>
                </div>
                <div className="sidebar__icon">
                    <SubscriptionsIcon/>
                    <p>Subscriptions</p>
                </div>
                <div className="sidebar__icon">
                    <VideoLibraryIcon/>
                    <p>Library</p>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;
