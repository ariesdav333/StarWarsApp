import Vue from 'vue'
import Router from 'vue-router'
import Planets from './views/Planets'
import Films from './views/Films'
import People from './views/People'
import Species from './views/Species'
import StarShips from './views/StarShips'
import Vehicles from './views/Vehicles'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/planets', name: 'planets', component: Planets},
    { path: '/films', name: 'films', component: Films},
    { path: '/people', name: 'people', component: People},
    { path: '/species', name: 'species', component: Species},
    { path: '/starships', name: 'starships', component: StarShips},
    { path: '/vehicles', name: 'vehicles', component: Vehicles},
   
  ]
})
