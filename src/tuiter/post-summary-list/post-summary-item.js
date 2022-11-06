import React from "react";
const PostSummaryItem = (
 {
   post
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-1 ps-0 ">
          <img  alt="profile" className="float-left float-start rounded-circle" src={`/images/${post.profilepic}`} height ={45} width={45}/>
     </div>
     <div className="col-11">
       <div className=" fw-bold">{post.userName}</div> <span className=" fw-muted"> {post.handle}</span>  
       
       <div className=" p-1">{post.tweets}</div>
     </div>
     
   </div>
  </li>
 );
};
export default PostSummaryItem;