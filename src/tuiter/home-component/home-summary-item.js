import React from "react";
const PostSummaryItem1 = (
 {
   post
 }
) => {
 return(
  <li className="list-group-item">
   <div class="row">
     <div class="col-1 ps-0 ">
          <img className="float-left float-start rounded-circle" src={`/images/${post.profilepic}`} height ={45} width={45}/>
     </div>
     <div class="col-11">
        <div class ="text-muted">{post.retweet}</div>
        <div class=" fw-bold">{post.userName} <i class="text-primary bi bi-check-circle-fill"/> <span class="text-muted"> {post.handle} - {post.time} </span> </div>
        <div class="">{post.post}</div>
              
              <div class="mt-2 border border-secondary rounded">
          
              <img class=" w-100 border-bottom border-secondary rounded "  src={`/images/${post.image}`} height = {340}/>
              
            
                
        </div>


        <ul class="nav   align-items-center nav-justified mt-2 p-0">
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="bi bi-chat text-muted"></i>  {post.comments}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="bi bi-heart text-muted"></i> {post.retuits}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="bi bi-arrow-repeat text-muted"></i> {post.likes}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted " href="#"><i class="bi bi-box-arrow-up text-muted"></i></a>
          </li>
          
          
     </ul>

         <div >
         <a class="fw-bold text-primary text-decoration-none" href="#"> {post.show} </a> 
        </div>
    </div>
   </div>
    
  </li>
 );
};
export default PostSummaryItem1;