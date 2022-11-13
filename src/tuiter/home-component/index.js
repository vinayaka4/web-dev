import React,  {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import PostSummaryItem1 from "./home-summary-item.js";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const PostSummaryList1 = () =>{
const {tuits, loading} = useSelector(
  state => state.tuitsData)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])

 return(
   <ul className="list-group">
     {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

     {
       tuits.map((tuit) =>
         <PostSummaryItem1
           key={tuit._id} tuit={tuit}/> 
           )
           
     }
   </ul>
 );
};
export default PostSummaryList1;

