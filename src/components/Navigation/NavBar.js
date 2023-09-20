import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

import "./navBar.css"
export default function NavBar() {
  return (
    <div>
<div className="navBarBox">
    <div className="navBarLeft">
         <span className="logo">fakebook</span>
    </div>

    <div className="navBarCenter">
        <div className="searchBarBox">
            <SearchIcon className='searchIcon'/>
            <input placeholder='Search for your friend' type="text" className="searchInput" />
        </div>
    </div>

    <div className="navBarRight">
        <div className="navBarLinks">
            <span className="navbarLink">HomePage</span>
            <span className="navbarLink">Profile</span>
        </div>
        <div className="navBarIcons">
            <div className="navBarIcon">
                <PersonIcon/>
                <span className="iconTag">10</span>
            </div>
            <div className="navBarIcon">
                <MessageIcon/>
                <span className="iconTag">1</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className="iconTag">1</span>
            </div>
        </div>
        <div className="pic"></div>
        <img src="/imgs/1.jpeg" alt="" className="profileImg" />
    </div>
</div>
    </div>
  )
}
