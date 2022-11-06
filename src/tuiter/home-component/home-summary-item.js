
import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import deleteTuit from "../tuits/tuits-reducer";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'
library.add( faSolidHeart)





const PostSummaryItem1 = (
 {
   tuit=[ { "_id": 123, 
   "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",  
   "profilepic": "space.jpg",
    "handle": "@Spacex",
   "tweets"   : "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
   "comments":"50k",
   "retuits":"100k",
   "likes":"89k",
   "liked":false,
   },
  ]
 }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-1 ps-0 ">
          <img  alt="profile" className="float-left float-start rounded-circle" src={`/images/${tuit.profilepic}`} height ={45} width={45}/>
     </div>
     <div className="col-11">
     <span><i className="bi bi-x-lg float-end"
                                     onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </span>
      
        <div className=" fw-bold">{tuit.userName} <i className="text-primary bi bi-check-circle-fill"/> <span className="text-muted"> {tuit.handle} - {tuit.time} </span> </div>
        <div className=" p-1">{tuit.tweets}</div>
              
            


        <ul className="nav   align-items-center nav-justified mt-2 p-0">
          <li className="nav-item">
            <a className="nav-link text-muted" href="https://www.lipsum.com"><i className="bi bi-chat text-muted"></i>  {tuit.comments}</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-muted" href="https://www.lipsum.com ">
            { tuit.liked && <FontAwesomeIcon icon={faSolidHeart} className="pe-2 text-danger fa-1x"/> }
             { !tuit.liked && <i className="bi bi-heart text-muted"></i> }
            {tuit.retuits}
            </a>
          </li>
          
          <li className="nav-item">
         
            <a className="nav-link text-muted" href="https://www.lipsum.com"><i className="bi bi-arrow-repeat text-muted"></i> {tuit.likes}</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted "href="https://www.lipsum.com"><i className="bi bi-box-arrow-up text-muted"></i></a>
          </li>
          
          
     </ul>

         <div >
         <a className="fw-bold text-primary text-decoration-none" href="https://www.lipsum.com">  </a> 
        </div>
    </div>
   </div>
    
  </li>
 );
};
export default PostSummaryItem1;