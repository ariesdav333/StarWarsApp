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
      <router-link to="planets" class="nav-item"> Planets  </router-link>
      <router-link to="films" class="nav-item r-item"> Films  </router-link>
      <router-link to="people" class="nav-item r-item"> People </router-link>
       <router-link to="species" class="nav-item r-item"> Species </router-link>
        <router-link to="starships" class="nav-item r-item"> StarShips </router-link>
         <router-link to="vehicles" class="nav-item r-item"> Vehicles </router-link>

      <div class="nav-item"> 
        <p class="control">

        </p>


      </div>
        </div>
      </div>
    </div>


    <h1 class="header"> Star Wars </h1>

    <h2 class="header-h2"> Below are a list of Planets with some information about them </h2>
    <div class="container-fluid">
      <div class="columns"> 
      <div v-for="(planet, index) in planets" :key="index">
       <!-- <pre>{{planets}}</pre> -->
        <div class="column">
        <b>Name:</b>{{planet.name}}
        <p><b>Rotation:</b>{{planet.rotation_period}}</p>
        <p><b>Usual Climate:</b> {{planet.climate}}</p>
        </div>
      </div>
      </div>
    </div>
    
    
    <router-view/>
  </div>
</template>

<script>


export default {

  data(){
    return{
      planets: [],
    }
  },
  methods: {
    loadPlanets() {
      this.planets = [];
      let url = "planets";
      this.$http.get(url).then(response => {
        this.planets = response.data.results;
      });
    },  
  },
  created() {
    this.loadPlanets(); // get data once instance loads
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

</style>
