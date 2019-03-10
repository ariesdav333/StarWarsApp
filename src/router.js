import Vue from 'vue'
import Router from 'vue-router'
import Planets from '@/components/Planets'
import Films from '@/components/Films'
import People from '@/components/People'
import Species from '@/components/Species'
import StarShips from '@/components/StarShips'
import Vehicles from '@/components/Vehicles'


Vue.use(Router)

export default new Router({
  routes: [
    { path: 'Planets', name: 'planets', component: Planets},
    { path: 'Films', name: 'films', component: Films},
    { path: 'People', name: 'people', component: People},
    { path: 'Species', name: 'species', component: Species},
    { path: 'StarShips', name: 'starships', component: StarShips},
    { path: 'Vehicles', name: 'vehicles', component: Vehicles},
   
  ]
})
