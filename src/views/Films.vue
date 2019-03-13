<template>
    <div>

        <h2> A list of Films in Star Wars</h2>
        <div class="container-fluid">
        <div class="columns">
            <div v-for="(film, index) in films" :key="index" ></div>
            <pre>{{films}}</pre> 
            <div class="column">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {  
    data() {
        return{
            films: [],
        }
    },
    methods: {
        loadFilms() {
            this.films = [];
            let url = "films";
            this.$http.get(url).then(response => {
                this.films = response.data.results;
            });
        },
        },
        created() {
            this.loadFilms();
        }
    

}


</script>

<style>
.container-fluid{
  padding: 20px;
  margin: 10px;
}
</style>
