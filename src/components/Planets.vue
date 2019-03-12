<template>
    <div>
         <h1 class="header"> Star Wars </h1>

    <h2 class="header-h2"> Below are a list of Planets with some information about them </h2>
    <div class="container-fluid">
      <div class="columns"> 
      <div v-for="(planet, index) in planets" :key="index">
       <!-- <pre>{{planets}}</pre> -->
        <div class="column">
        <b>Name:</b>{{planet.name}}
        <p><b>Rotation:</b>{{planet.rotation_period}}</p>
        <p><b>Diameter of Planet: </b>{{planet.diameter}}</p>
        <p><b>Usual Climate:</b> {{planet.climate}}</p>
        <p><b>Created on: </b>{{planet.created}}</p>
        </div>
      </div>
      </div>
    </div>

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

</style>
