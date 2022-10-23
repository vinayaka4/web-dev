import React from "react";
const PostSummaryItem1 = (
 {
   post
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-1 ps-0 ">
          <img className="float-left float-start rounded-circle" src={`/images/${post.profilepic}`} height ={45} width={45}/>
     </div>
     <div className="col-11">
        <div className ="text-muted">{post.retweet}</div>
        <div className=" fw-bold">{post.userName} <i className="text-primary bi bi-check-circle-fill"/> <span className="text-muted"> {post.handle} - {post.time} </span> </div>
        <div className="">{post.post}</div>
              
              <div className="mt-2 border border-secondary rounded">
          
              <img className=" w-100 border-bottom border-secondary rounded "  src={`/images/${post.image}`} height = {340}/>
              
            
                
        </div>


        <ul className="nav   align-items-center nav-justified mt-2 p-0">
          <li className="nav-item">
            <a className="nav-link text-muted" href="#"><i className="bi bi-chat text-muted"></i>  {post.comments}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#"><i className="bi bi-heart text-muted"></i> {post.retuits}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#"><i className="bi bi-arrow-repeat text-muted"></i> {post.likes}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted " href="#"><i className="bi bi-box-arrow-up text-muted"></i></a>
          </li>
          
          
     </ul>

         <div >
         <a className="fw-bold text-primary text-decoration-none" href="#"> {post.show} </a> 
        </div>
    </div>
   </div>
    
  </li>
 );
};
export default PostSummaryItem1;