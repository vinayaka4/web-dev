import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = ()=>{
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
 
   
    return (
      <div className="list-group">
        <div className="row">
        <a className="list-group-item">Tuiter</a>
    
        
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>

           <i class="bi bi-house-door-fill"></i>             
           Home
        </Link>
       
        <Link to="/tuiter/explore1" className={`list-group-item ${active === 'explore'?'active':''}`}>
        <i class="bi bi-hash"></i>
       Explore
       </Link>
       <Link to="/" className="list-group-item">
       <i class="bi bi-tag"></i>
       Labs
      </Link>

        <a className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
                        <i class="bi bi-bell-fill"></i>
          Notifications
        </a>
        <a className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
                        <i class="bi bi-envelope-fill"></i>
          Messages
        </a>
        <a className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
                        <i class="bi bi-bookmark-fill"></i>
          Bookmarks
        </a>
        <a className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
                        <i class="bi bi-list"></i>
          Lists
        </a>
        <a className={`list-group-item
                       ${active === 'profile'?'active':''}`}>
                        <i class="bi bi-person-fill"></i>
          Profile
        </a>
        <a className={`list-group-item
                       ${active === 'more'?'active':''}`}>
                        <i class="bi bi-three-dots"></i>
          More
        </a>
        </div>
      </div>
    );
   };
   export default NavigationSidebar;
   