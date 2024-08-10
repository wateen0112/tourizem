import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import Intro from '../components/pages/Intro.vue';
import Signup from '../components/pages/Signup.vue'
import Login from '../components/pages/Login.vue'
import About from  '../components/pages/About.vue'
import Slider from '../components/pages/Slider.vue'
import Process from '../components/pages/Process.vue'
import  Profile from '../components/pages/Profile.vue'
import Home2 from '../components/pages/Details.vue'
import Services from '../components/pages/Services.vue'

import ContactUs from '../components/pages/ContactUs.vue';
const routes = [

  {
name : 'Countires',
path:'/countries/:id',
component: Home2
  },
  {
    name:'About',
    path:'/about',
    component :About
  },
  {
name : 'ContactUs',
path:'/ContactUs',
component: ContactUs
  },
  {
name : 'Reserve',
path:'/reserve/:id',
component: Process
  },
  { path: '/mainPage', component: HomePage },

  { 
    name:'Intro',
    path: '/intro', component: Intro },
  { path: '/', component: Slider },
  { 
    name:'Login',
    path: '/login', component: Login },
  { 
    name:'Signup',
    path: '/Signup', component: Signup },
  { 
    name:'Profile',
    path: '/profile', component: Profile },
  { 
    name:'Services',
    path: '/services', component: Services },
  
]

 const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router 