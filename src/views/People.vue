<template>
    <div>
   
    <h1><b>People Page</b></h1>

    <modal v-if="showModal" :title="People" @close="showModal = false"></modal>
        <div class="container-fluid">
            <div class="columns">
                <div v-for="(people, index) in peoples" :key="index"> 
                <div class="column is-one-fifth"> 
                    <div class="column">
                    <p><b>Name: </b>{{people.name}}</p>
                    <p><b>Height: </b>{{people.height}}</p>
                    <p><b>Weight: </b>{{people.mass}}</p>
                      <p><b>Hair Colour: </b>{{people.hair_color}}</p>
                        <p><b>Skin Colour: </b>{{people.skin_color}}</p>
                          <p><b>Eye Colour: </b>{{people.eye_color}}</p>
                            <p><b>DOB: </b>{{people.brith_year}}</p>
                              <p><b>Gender: </b>{{people.gender}}</p>
                                <p><b>Eye Colour: </b>{{people.mass}}</p> 
                                <v-button :onClick="peopleClick">People Info</v-button>
                                
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

export default {
    components: {
        Modal,
        'v-button':Button,
    },
    data() {
        return{
            peoples: [],
            showModal: false,
        }
    },
    methods: {
        peopleClick() {
            console.log('People Clicked')
        },
        loadPeople() {
            this.peoples = [];
            let url = "people";
            this.$http.get(url).then(response => {
                this.peoples = response.data.results;
            });
            },
        },
        created() {
            this.loadPeople();
        }
    }
    

</script>


<style>

</style>
