import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {updateTuitThunk}   from "../../services/tuits-thunks"; 
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'
library.add( faSolidHeart)





const PostSummaryItem1 = (
 {
   tuit
 }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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
      
        <div className=" fw-bold">{tuit.username} <i className="text-primary bi bi-check-circle-fill"/> <span className="text-muted"> {tuit.handle} - {tuit.time} </span> </div>
        <div className=" p-1">{tuit.tuit}</div>
              
            


        <ul className="nav   align-items-center nav-justified mt-2 p-0">
          <li className="nav-item">
            <a className="nav-link text-muted" href="https://www.lipsum.com"><i className="bi bi-chat text-muted"></i>  {tuit.replies}</a>
          </li>
          <li className="nav-item">
          <i  className="text-decoration-none text-secondary small">
                    { tuit.liked && <FontAwesomeIcon icon={faSolidHeart}
                                                     className="pe-2 text-danger fa-1x"
                                                     onClick={() =>dispatch(updateTuitThunk({
                                                      ...tuit,
                                                          liked: false,
                                                          likes: tuit.likes - 1}))}/> }
                    { !tuit.liked && <i className="bi bi-heart text-muted"
  
                                                      onClick={() =>dispatch(updateTuitThunk({
                                                        ...tuit, 
                                                          liked: true,
                                                          likes: tuit.likes + 1}))} />}
                    {tuit.likes}
          </i>
          </li>
          <li className="nav-item">  
          <div className=" text-decoration-none text-secondary">
                <i  className="text-decoration-none text-secondary small">
                    { tuit.disliked && <i className="bi bi-hand-thumbs-down-fill "
                                          onClick={() => dispatch(updateTuitThunk({
                                                          ...tuit,
                                                          disliked: false,
                                                          dislikes: tuit.dislikes - 1}))}/> }
                    { !tuit.disliked && <i className="bi bi-hand-thumbs-down"
                                                      onClick={() => dispatch(updateTuitThunk({
                                                          ...tuit,
                                                          disliked: true,
                                                          dislikes: tuit.dislikes + 1}))}/> }
                    {tuit.dislikes}
                </i>
            </div>

          </li>
          
          <li className="nav-item">
         
            <a className="nav-link text-muted" href="https://www.lipsum.com"><i className="bi bi-arrow-repeat text-muted"></i> {tuit.retuits}</a>
            
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