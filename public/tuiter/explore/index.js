import ExploreComponent from "./explorescreen/ExploreComponent.js";
import NavigationSidebar from "./NavigationSidebar.js";
import whotofollowlistitem from "./whotofollowlist/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
    <h2>Explore</h2>
<div class="row mt-2">
<div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
  ${NavigationSidebar()}
</div>
<div class="col-10 col-lg-7 col-xl-6 ">
 ${ExploreComponent()}
</div>
<div class=" d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
 ${whotofollowlistitem()}
</div>

</div>
`);

 };
 $(exploreComponent);
 
 