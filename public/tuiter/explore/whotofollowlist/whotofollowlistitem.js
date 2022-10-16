const whotofollowlistitem=(who)=>{

return (`


<li class="list-group-item ">
                <div class="row">
                <div class="col-2">
                 <img class="float-strat rounded-circle" src=${who.avatarIcon} height="45px" width="45px">
             </div>
                    <div class="col-8">
                        <div class=" fw-bolder">${who.userName}<i class="fas fa-check-circle"></i> </div>
                        <div class="">${who.handle}</div>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary  rounded-pill btn-sm float-end">Follow</button>
                    </div>
            </li>

 




`)


};

export default whotofollowlistitem;