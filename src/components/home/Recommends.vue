<script  setup lang="ts">
import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'
import Card from '../famos/Card.vue'

import {Icon} from '@iconify/vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { UseCountryStore } from '../../store/Country'
import { storeToRefs } from 'pinia'
const loading = ref(true)
const currIndex = ref(0)
const store = UseCountryStore()
const  {readCountries} = store;
const length =ref(0)
const  breakpoints = {
    500: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  900: {
    itemsToShow:2,
    snapAlign: 'start',
  },
  1200: {
    itemsToShow:3,
   
  }}
const {countries}  = storeToRefs(store)
onMounted(async()=>{
 
try {
    await readCountries()
    length.value= countries.legnth
loading.value = false
} catch (error) {
    throw(error)
}
})
const inc = ()=>{
    if (currIndex.value ==countries.value.length){
        currIndex.value =0
    }
    else {
        currIndex.value = currIndex.value+1;
    }
  }
  const dec = ()=>{
    if (currIndex.value>0){
        currIndex.value  = currIndex.value - 1
    }
    else if(currIndex.value==0){
currIndex.value = countries.value.length
    }
  }
</script>
<template>

<div class=" md:px-20 relative lg:px-28 ">


<span  v-if="loading==false" @click="dec" class="rounded-full  md:flex hidden w-[30px] cursor-pointer z-40 h-[30px] border-[1px]  justify-center items-center border-solid border-black absolute top-[50%] translate-y-[-50%] left-3 ">

    <Icon icon="mdi-chevron-left" />
</span>
<!--large-->
<span  v-if="loading==false" @click="inc" class="rounded-full w-[30px]  md:flex hidden  cursor-pointer z-40 h-[30px] border-[1px]  justify-center items-center border-solid border-black absolute top-[50%] translate-y-[-50%] right-3 ">

    <Icon icon="mdi-chevron-right" />
</span>
<div    v-if="loading==false" class="my-8 relative">
<!--large-->

<Carousel  v-model="currIndex"   height=""  hide-delimiters  :breakpoints="breakpoints "   :show-arrows="false" class="h-full   lg:block relative">
    <Slide    v-for="(country, i) in countries"   :key="i">

        <div  class="flex">

  
   
            <Card 
            
            :route="'/countries/'+country.id"
            :is-city="false"
            :country="country"/>
        </div>
    
    </Slide>
    
    
    </Carousel>


</div>
</div>
</template>
