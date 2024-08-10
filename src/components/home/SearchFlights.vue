<script setup lang="ts">
import {Icon} from '@iconify/vue'
import Card from '../home/FlightCard.vue'
import { UseStateStore } from '../../store/State';
import { storeToRefs } from 'pinia';
import appConfig from '../../../app.config';
import { onMounted, ref } from 'vue';
import { UseCountryStore } from '../../store/Country';
import { VDateInput } from 'vuetify/labs/VDateInput'
import { UseAuthStore } from '../../store/Auth';
import { useRouter } from 'vue-router';
import Reviews from './Reviews.vue';
const {findCountryDestinaitons} = UseCountryStore()
const loading = ref(true)
const {isLoggedIn}   = storeToRefs(UseAuthStore())
const props = defineProps(['countryId'])
const {stationsByCountry} = storeToRefs(UseCountryStore())
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
const router = useRouter()
onMounted(()=>{
    findCountryDestinaitons(props.countryId).then(()=>{loading.value = false})
})
</script>
<template>
 
    <div class="flex justify-center items-center my-5">
 
    <div  class="container w-full  pb-5"> 
 
<h1 class="m-5 mx-12 font-semibold text-xl">Search Flights</h1>

<div class="grid lg:grid-cols-2 grid-cols-1">
<!-- col 1 -->
 <div class="flex px-12 justify-start items-center flex-col  gap-3">

<VTextField   variant="plain"  class="w-full my-field" prepend-icon=""  label="from" >
<template #prepend-inner>
<Icon  width="20" color="#727B7B" icon="mdi-map-marker"/>

</template>    
</VTextField>
<v-date-input   variant="plain"  :min="new Date()"  class="w-full my-field" prepend-icon=""  label="Depart" >
    <template #prepend-inner>
    <Icon  width="20" color="#727B7B" icon="mdi-calendar-blank"/>
    
    </template>    
    </v-date-input>
    <VTextField   variant="plain"  class="w-full my-field" prepend-icon=""  label="Travelers" >
        <template #prepend-inner>
        <Icon  width="20" color="#727B7B" icon="mdi-account-multiple-outline"/>
        
        </template>    
        </VTextField>

        <div class="flex justify-start  gap-3 w-full items-center ">
            <input  class="my-checkbox" type="checkbox" />

            <span>prefer nonstop</span>
        </div>
<div class="flex justify-start w-full">        <button 
    
    @click="async()=>{
    await findCountryDestinaitons(countryId)}"
    class="orange-btn">find flight</button></div>
 </div>
<!-- col 2 -->
<div class="flex px-12 justify-start items-center flex-col  gap-3">
    <VTextField   variant="plain"  class="w-full   my-field" prepend-icon=""  label="To" >
        <template #prepend-inner>
        <Icon  width="20" color="#727B7B" icon="mdi-map-marker"/>
        
        </template>    
        </VTextField>
        <v-date-input   :min="new Date()"   variant="plain"  class="w-full my-field" prepend-icon=""  label="Return" >
            <template #prepend-inner>
            <Icon  width="20" color="#727B7B" icon="mdi-calendar-blank"/>
            
            </template>    
            </v-date-input >

</div>
</div>
    </div>
   
</div>
 <!-- flgiht cards -->
<div class="flex  justify-center items-center  w-full">

    <div  v-if="loading==false" class="grid lg:grid-cols-2 grid-cols-1  px-24 pb-5  gap-5 ">

        <Card v-for="item in stationsByCountry  " :station="item" />
     </div>
</div>
<!-- <Reviews/> -->
 <!-- flgiht cards -->
</template>
<style scoped>
.container{
    /* Rectangle 35 */




background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

}
.my-field{
    /* Rectangle 36 */



height: 65px;
max-height: 65px;

padding-left: 12px;

background: rgba(217, 217, 217, 0.45);
border-radius: 12px;

}
.my-checkbox {
    /* Rectangle 41 */

box-sizing: border-box;


width: 20px;
height: 20px;


background: #F3FFFC  !important;
border: 2px solid #000000;
border-radius: 12px;

}
.orange-btn{
    /* Rectangle 42 */


width: 257px;
height: 36px;

color: white;
background: #FF7A00;
border-radius: 12px;

}
</style>