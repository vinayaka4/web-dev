import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";


const PostSummaryList = () => {
    return (`
        ${post.map(item => PostSummaryItem(item)).join('')} 
        </ul>
`); }

export default PostSummaryList;