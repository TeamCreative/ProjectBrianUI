import React from 'react'
import './sidebar.css'

//import material
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import compoents
import SidebarOption from './SidebarOption'
import { Button } from '@material-ui/core';

function FirstSidecompoents() {
    return (
        <div className="sidebar">
            <TwitterIcon className="styletwitterIcon"/>
            <SidebarOption active  Icon={ HomeIcon } text="Home"/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationImportantIcon}/>
            <SidebarOption   Icon={ MessageIcon } text="Messages"/>
            <SidebarOption text="BookMarks" Icon={BookmarkIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
           <Button variant="outlined" fullWidth className="sidebarbutton">Tweet</Button>
        </div>
    )
}

export default FirstSidecompoents

