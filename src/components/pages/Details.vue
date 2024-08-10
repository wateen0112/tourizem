<script setup lang="ts">
import HomeImage from '../../assets/images/home2.png'
import {onMounted, ref} from 'vue'
import SearchFlights from '../home/SearchFlights.vue'
import HotelTab from '../home/HotelTab.vue'
import I1 from '../../assets/images/i1.png'
import I2 from '../../assets/images/i2.png'
import I3 from '../../assets/images/i3.png'
import I4 from '../../assets/images/i4.png'
import I5 from '../../assets/images/i5.png'
import Reviews  from '../home/Reviews.vue'
import Recommends from '../home/Recommends.vue'
import LocationPickerInit from 'vue-location-picker/src/init'
import LocationPicker from 'vue-location-picker'
 
import {Icon} from '@iconify/vue'
import { useRoute } from 'vue-router'
import { UseCountryStore } from '../../store/Country'
import { storeToRefs } from 'pinia'
import appConfig from '../../../app.config'
import { UseStateStore } from '../../store/State'
import Activites from '../home/Activites.vue'
const route = useRoute()
const id= route.params.id
const store = UseCountryStore()
const {getCountryById}= store ;
const {country } = storeToRefs(store)
const tabItem  = ref(0)
const loading = ref(true)
const statesLoading  = ref(true)

onMounted(()=>{
     getCountryById(id).then(()=>{
        loading .value=false
     }).catch()
     UseStateStore().getStatesByCountryId(id).then(()=>{
        statesLoading.value= false
     }).catch()
})

const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>
<template>

<div  v-if="loading==false"  >
<div class="image-container mb-12 w-full mt-5 h-[300px] ">
<img  :src="HomeImage"  class="w-full" />
</div>

<div class=" my-5 flex justify-evenly items-center flex-row flex-no-wrap ">
<button   
:class="tabItem==1?'bg-[#76C8E8]':''"
class="hover:shadow-lg border-[1px]  mt-4 justify-center items-center   flex gap-3 w-[200px] h-[40px] rounded-lg border-solid border-[#eee]"  @click="tabItem=1">
   <Icon width="24"   icon="mdi-airplane" /> 
   <span class="font-semibold">How to fly?</span> 
</button>
<button  
:class="tabItem==2?'bg-[#76C8E8]':''"
class="hover:shadow-lg border-[1px] mt-4 justify-center items-center   flex gap-3 w-[200px] h-[40px] rounded-lg border-solid border-[#eee]"  @click="tabItem=2">
   <Icon width="24"   icon="mdi-weather-night" />
   <span class="font-semibold">where to stay?</span> 
</button>
<button  
:class="tabItem==3?'bg-[#76C8E8]':''"
class="hover:shadow-lg border-[1px] mt-4 justify-center items-center   flex gap-3 w-[200px] h-[40px] rounded-lg border-solid border-[#eee]"  @click="tabItem=3">
   <Icon width="24"   icon="mdi-emoticon-happy" />
   <span class="font-semibold">What to do?</span> 
</button>

</div>
<div class="flex justify-center items-center my-5"  v-if="tabItem==0">
    <div  class="container w-full "> 

<h1 class="m-5 font-bold text-2xl">{{ country.name }}  </h1>
 <p class="m-5">{{ country.detail }} </p>
 <h2 class="m-5 font-bold text-xl">images & famous sopts</h2>
<div class="p-5">
    <img  :src="getFileUrl(country.image)"/>
</div>
    </div>
</div>
<div class="w-full flex justify-center items-center">
    <v-window v-if="tabItem!==0" v-model="tabItem" class="w-full">
        <v-window-item :value="1"  > 
        <SearchFlights  :countryId="id"/>

        </v-window-item>
        <v-window-item :value="2" >

   <div class="w-full flex justify-center items-cetner ">
    <HotelTab   :countryId="id"></HotelTab>

   </div>
        </v-window-item>
        <v-window-item :value="3" >
            <Activites  :countryId="id"/>
        </v-window-item>
        
        </v-window>
</div>

<!-- <Recommends/> -->
</div>

</template>
<style scoped>
.container{
    /* Rectangle 35 */




background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

}
</style>