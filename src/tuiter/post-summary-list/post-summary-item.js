import React from "react";
const PostSummaryItem = (
 {
   post
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{post.userName} . {post.time}</div>
       <div className="fw-bolder">{post.topic}</div>
       <div>{post.title}</div>
     </div>
     <div className="col-2 pt-4">
       <img  alt="profile" width={80} className="float-end rounded-3" src={`/images/${post.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default PostSummaryItem;