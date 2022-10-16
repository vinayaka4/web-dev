import whotofollowlistitem from "./whotofollowlistitem.js";
import who from "./who.js"

const whotofollowlist=()=>{

return(`

<div class="row">
<ul class= "list-group">
            <li class="list-group-item">
                <div class=" fw-bolder">Who to follow</div>
            </li>






${(who.map(item=>whotofollowlistitem(item)).join(''))}
</div>
`)


}

export default whotofollowlist;