import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/post.js";

const ExploreComponent = () => {
    return(`
        
            <div class="row">

            <div class="col-11">
                <div class="position-relative">
                 <input class="form-control rounded-pill ps-5" placeholder= "Search Tuiter"/>
                 <span class="fas fa-search text-secondary position-absolute wd glass"></span>
                </div>
                </div>
                <div class="col-1 mt-1">
                 <i class="fas fa-cog fa-lg text-primary"></i>
                </div>
        </div> 
           
           <ul class="nav mt-1 mb-2 nav-tabs">


           <li class="nav-item ">
               <a class="nav-link active" href="#">
                   For you
               </a>
           </li>
           <li class="nav-item mt-0">
               <a class="nav-link" href="#">
                   Trending
               </a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">
                   News</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">Sports</a>
           </li>
           <li class="nav-item d-none d-md-block">
               <a class="nav-link" href="#">Entertainment</a>
           </li>
        </ul>
            

        <div class="position-relative mt-5 ">
              <img src="../../Images/starship.jpg" width="100%"/>
              <h1 class="position-absolute bottom-0 left-0 text-white">STAR WARS</h1>

            </div>




           <div class="list-group">
           <!-- image with overlaid text -->
           ${PostSummaryList(post)}
           </div>
    `);
}
export default ExploreComponent;

