import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem1 from "./home-summary-item.js";

const PostSummaryList1 = () => {
  const tuitsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuitsArray.map((tuits,_id) =>
         <PostSummaryItem1
           key={tuits._id} tuits={tuits}/> 
           )
           
     }
   </ul>
 );
};
export default PostSummaryList1;

