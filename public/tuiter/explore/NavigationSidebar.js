const NavigationSidebar = () => {
  return(`
   <div class="list-group">
      <a class="list-group-item list-group-item-action">
      <i class=" fab fa-tumblr fa-2x"></i></a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="../HomeScreen/index.html">
      <i class=" fas fa-home"></i><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">Home</span>  </a>
      <a class=" text-decoration-none list-group-item list-group-item-action active" href="../explore/index.html">
        <i class="fas fa-hashtag"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Explore </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
        <i class="fas fa-bell"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Notifications </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
        <i class="fas fa-envelope"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Messages </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
        <i class="fas fa-bookmark"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Bookmarks </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
        <i class="fas fa-list"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Lists </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
        <i class="fas  fa-user"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Profile </span> </a>
      <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
      <i class="fas fa-ellipsis-h"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> More </span> </a>

      <button type="submit" class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>


    </div>
`);
}
export default NavigationSidebar;