import React from 'react'
const Navbar = () => {
  return (
    <div class="">

<nav class="navbar navbar-expand-lg navbar-light fixed-top   ">
  <a class="navbar-brand text-light mx-5 fs-4 " href="#">Brainy <span>lingo</span> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ms-5 fs-5" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mx-auto">
      <li class="nav-item active">
        <a class="nav-link text-light mx-2 " href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light mx-2" href="#">Leaderboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light mx-2" href="#">Daily quiz</a>
      </li>
    </ul>
    
  </div>

  <div class="ml-auto">
    <button class="btn bg-primary rounded-pill text-light my-2 my-sm-0 mx-5">Sign-out</button>
  </div>
</nav>


    </div>
  )
}

export default Navbar