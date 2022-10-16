import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/post.js";

const ExploreComponent = () => {
    return(`

           <div class="list-group">
           <!-- image with overlaid text -->
           ${PostSummaryList(post)}
           </div>
    `);
}
export default ExploreComponent;

