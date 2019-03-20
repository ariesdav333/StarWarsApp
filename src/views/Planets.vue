<template>
    <div>
            
    <h2 class="header-h2"> Below are a list of Planets with some information about them </h2>

    <modal v-if="showModal" :title="planet" @close="showModal = false">
       <div v-for="(planet, index) in planets" :key="index">
        <b>Name: </b>{{planet.name}}
        <p><b>Rotation: </b>{{planet.rotation_period}}</p>
        <p><b>Diameter of Planet: </b>{{planet.diameter}}</p>
        <p><b>Usual Climate:</b> {{planet.climate}}</p>
        <p><b>Created on: </b>{{planet.created}}</p>
      <button class="button is-black" @click="showModal = true">Info</button> 
      </div>
    </modal>

    

    <div class="container-fluid">
      <div class="columns"> 
         
      <div v-for="(planet, index) in planets" :key="index">
       <!-- <pre>{{planets}}</pre> -->
        <div class="column is-one-fifth">
            <div class="column">
        <b>Name: </b>{{planet.name}}
        <p><b>Rotation: </b>{{planet.rotation_period}}</p>
        <p><b>Diameter of Planet: </b>{{planet.diameter}}</p>
        <p><b>Usual Climate:</b> {{planet.climate}}</p>
        <p><b>Created on: </b>{{planet.created}}</p>
      <button class="button is-black" @click="showModal = true">Info</button> 
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {

    components: {
        Modal,
    },
    data() {
        return{
            planets: [],
            showModal: false,
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
        this.loadPlanets();
    }
}
</script>

<style>
.container-fluid{
  padding: 20px;
  margin: 10px;
}

</style>
