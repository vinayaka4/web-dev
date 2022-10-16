import NavigationSidebar from "../explore/NavigationSidebar.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import post from "../explore/PostSummaryList/post.js";
import postsummarylist from "./postsummary/index.js";
import posts from "./postsummary/posts.js";
function exploreComponent() {
    $('#wd-explore').append(`
<div class="row mt-2">
<div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
  ${NavigationSidebar()}
</div>
<div class="col-10 col-lg-7 col-xl-6 ">
${postsummarylist(posts)}
</div>
<div class=" d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
${PostSummaryList(post)}
</div>
</div>
`);

 };
 $(exploreComponent);
 
 