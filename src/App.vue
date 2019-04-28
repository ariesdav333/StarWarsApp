<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class=""> <b>Star Wars</b> </a>

        </div>
          <span class="nav-toggle">  <!-- for mobile devices -->
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu"> <!-- Create the router links here -->
      <router-link to="/Planets" class="nav-item">Planets</router-link>
      <router-link to="/Films" class="nav-item r-item">Films</router-link>
      <router-link to="/People" class="nav-item r-item">People</router-link>
       <router-link to="/Species" class="nav-item r-item">Species</router-link>
        <router-link to="/Starships" class="nav-item r-item">StarShips</router-link>
         <router-link to="/Vehicles" class="nav-item r-item">Vehicles</router-link>
         <router-link to="/Contact" class="nav-item r-item">Contact</router-link>
      <div class="nav-item"> 
        <p class="control">
        </p>
      </div>
        </div>
      </div>
    </div>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <img class="starwars-header" src="./assets/Star_Wars_logo-1.png"> 
        </div>
      </div>
    </section>
      <router-view/>
  </div>
</template>



<script>
export default {
  components:{
  }
}
</script>


<style>
.container-fluid{
  padding: 20px;
  margin: 10px;
}
.header{
  font-weight: 500;
  font-size: 25px;
}
.box{
  border-color: black;
  margin: 10px;
  padding: 2px;
}
.header{
  padding: 20px;
  font-size: 45px;
}
.header-h2{
  padding: 20px;
}

.nav{
  background-color: black;
}
.nav-item{
  display: inline;
  padding-right: 10px;
}
.starwars-header{
  position: relative;
  top: 40px;
  z-index: 0;
  height: 150px;
  width: 100%;

}
</style>
