<script setup lang="ts">
import { onMounted } from 'vue';
import  ServiceImage from '../../assets/images/service.jpg'
import {UseActivitiesStore} from '../../store/Activites'
import { storeToRefs } from 'pinia';
import {Icon} from '@iconify/vue'
import Recommends from '../home/Recommends.vue';
const store = UseActivitiesStore()
const {readCountryHobbies} =  store
const {hobbiesByCountry} = storeToRefs(store)
onMounted(()=>{
    readCountryHobbies(1).then().catch()
})
</script>
<template>

    <div  :style="'background:url('+ServiceImage+'); background-size:cover;'" class="relative  w-full min-h-[99vh]">

     
<div class=" pt-32   pb-20 lg:px-20 lg:px-20  z-30"> 

    <h1 class=" text-2xl lg:text-7xl font-bold  drop-shadow-2xl text-blue-400">Explore Our  Services</h1>
    <p  class=" mt-4 text-2xl font-bold  drop-shadow-2xl  bg-[#00000030] p-5 max-w-[800px] text-white">We take the hassle out of travel planning by providing comprehensive flight and hotel booking services. Our team works with top airlines and hotels to ensure you get the best deals and the most comfortable accommodations.</p>
</div>
<div class="mt-5 pt-2 lg:px-20  bg-[#ffffff90]   pb-20 z-30"> 
    <h2 class=" text-2xl lg:text-5xl font-bold   drop-shadow-2xl text-black-400 pb-4">Explore Our  Activites</h2>
    <div class="w-full flex flex-row justify-start gap-5">

<div v-for="item in hobbiesByCountry"  class="bg-[#ffffff] z-40 h-[30px] px-5 shadow-md rounded-full mt-2 flex justify-center items-center"> 
<Icon  icon="mdi-hops" color="#000" />
    <span class="text-black   drop-shadow-2xl font-bold">{{item.name}}</span>

</div>


        </div>
        <div class="w-full mt-20"><Recommends/></div>
    </div>
    </div>
</template>