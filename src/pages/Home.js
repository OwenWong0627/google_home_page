import React from 'react';
import './Home.css';
import Search from '../components/Search'
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Home() {
   return (
      <div className='home'>
         <div className='home_header'>
            <div className='home_header_left'>
               <Link to='/'>About</Link>
               <Link to='/'>Store</Link>
               <Link to='/history'>History</Link>
            </div>

            <div className='home_header_right'>
               <Link to='/'>Gmail</Link>
               <Link to='/'>Images</Link>
               <IconButton className="grid-icon" aria-label="apps">
                  <AppsIcon />
               </IconButton>
               <IconButton href="https://github.com/OwenWong0627" target="blank">
                  <Avatar />
               </IconButton>
            </div>
         </div>
         <div className='home_body'>
            <img
               className="google-logo"
               alt="Google"
               // height="92"
               // width="272"
               src="https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            />
            <div className="home_input">
               <Search />
            </div>
         </div>
         <div className='home_footer'>
         </div>
      </div>
   )
}

export default Home
