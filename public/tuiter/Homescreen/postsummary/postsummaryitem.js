
const postsummaryitem=(posts)=>{

    return (`
    
    
   
    <ul>
    <div class="row">
     <div class="col-1 ps-0 ">
          <img class="float-left float-start rounded-circle" src=${posts.avatarIcon} height = 45px width="45px">
     </div>
     <div class="col-11">
        <div class="text-white fw-bold">${posts.userName}<i class="fas fa-check-circle"></i> <span class="text-muted"> ${posts.handle} - ${posts.time} </span> </div>
        <div class="text-white">${posts.post}</div>
              
              <div class="mt-2 border border-secondary rounded">
          
              <img class=" w-100 border-bottom border-secondary rounded " src=${posts.image}  height = "340px">
              <div class="w-100 ps-3 pt-2 pe-2 fw-bolder align-items-center text-white ">
              ${posts.title}
              </div>
              <div class="mt-1 w-100 ps-3 pe-2 align-items-center">
              ${posts.message}
              </div>
              <div class="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
        
              </div>      
              </div>
              <br/>
          
          <ul class="nav   align-items-center nav-justified">
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="fas  fa-comment"></i> &nbsp ${posts.comments}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="fas fa-retweet"></i> &nbsp ${posts.retuits}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted" href="#"><i class="fas fa-heart"></i> &nbsp${posts.likes}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted " href="#"><i class="fas fa-arrow-up"></i></i></i></i>&nbsp </a>
          </li>
          
          
     </ul>
     </div>
    </div>
  </ul> 
    `)
    
    
    };
    
    export default postsummaryitem;