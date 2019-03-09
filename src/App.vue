<template>
  <div id="app">
    <h1 class="header"> Star Wars </h1>
    <div class="container-fluid">
      <div class="columns"> 
      <div v-for="(planet, index) in planets" :key="index">
        <pre>{{planets.name}}</pre>
        <div class="column">
        {{planet.name}}
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
}

</style>
