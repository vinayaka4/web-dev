
const PostSummaryItem=(post)=>{

    return (`
    
    
   
    <li class="list-group-item">
    <div class="row">
        <div class="col-8 p-3">
            <div class="text-muted">${post.topic} </div>
            <div class=" fw-bolder pt-1 pb-1">${post.userName} <i class="fas fa-check-circle"></i> <span class="text-muted font-monospace">${post.time}</span> </div>
            <div class=" fw-bolder text-justify d-inline-block">${post.title}</div>
        </div>
        <div class="col-4 pt-1 pb-1">
         <img class="float-end rounded " width="100px" height="100px"
         src=${post.image} />
        </div>
        
    </div>
 </li>
    
    
    
    
    `)
    
    
    };
    
    export default PostSummaryItem;