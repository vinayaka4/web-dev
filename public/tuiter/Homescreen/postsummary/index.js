import postsummaryitem from "./postsummaryitem.js";
import posts from "./posts.js";


const postsummarylist = () => {
    return (`
        ${posts.map(item => postsummaryitem(item)).join('')} 
        </ul>
`); }

export default postsummarylist;