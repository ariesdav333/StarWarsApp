<template>
    <div>    
    <h2 class="header-h2"> Below are a list of Planets with some information about them </h2>
<!-- Test Profile Page -->
    <div class="profile-page">
        <div class="avatar">
           <p>{{user.name}}</p> 
            {{user.emailAddress}}
        </div>
    </div>

    <contact-info
    :email-address="emailAddress"
    :twitter-handle="twitterHandle"
    :instagram="instagram"
    />

    <!-- Test Profile Page -->
 

    <modal v-if="showModal" :title="planet" @close="showModal = false">
       <div v-for="(planet, index) in planets" :key="index">
        <b>Name: </b>{{planet.name}}
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
        <v-button>Planet Info</v-button>
   
         <!--<button class="button is-black" @click="showModal = true">Info</button> -->
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import ContactInfo from '@/components/ContactInfo'


export default {
    components: {
        ContactInfo,
        Modal,  
        'v-button':Button,  
    },
    data() {
        return{
            planets: [],
            showModal: false,
            post: null,

            //  Profile Page Data
            user: {
                name: 'David Williams',
                emailAddress: 'davidwilliams@gmail.com',
                twitterHandle: 'davaries333',
                instagram: 'davariesdread',
            },

            // Profle Page Data

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
