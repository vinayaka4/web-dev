import {Link} from "react-router-dom";
const Nav = () =>{
    return(
        <div>
             <Link to="/labs">Lab</Link> |
   <Link to="/">Hello</Link> |
   <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}
export default Nav;