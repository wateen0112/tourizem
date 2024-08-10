<script setup lang="ts">
import {Icon} from '@iconify/vue'
import { VDateInput } from 'vuetify/labs/VDateInput'
import appConfig from '../../../app.config';
import { UseStateStore } from '../../store/State';
import HotelCard from './HotelCard.vue';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Reviews from './Reviews.vue';
const selectedCityTitle = ref('')
const hotelNameQuery = ref('')
const selecttedStateId  = ref('')
const props = defineProps(['countryId'])
const selectedCityDescription = ref('')
const numberOfPersons= ref(1)
 let oldValue = []
 const selctedCityId= ref('')
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
const {allStates,cities,servicesByType,citiesFeedBack} = storeToRefs(UseStateStore())
const  {getCitiesByStateId,    readCityFeedBack,getServicesByCityIdAndType,
} = UseStateStore()

const filterFunciton = ()=>{
 
    servicesByType.value = oldValue
servicesByType.value = servicesByType.value.filter((item)=>{
    return item.name.includes(hotelNameQuery.value)
})
}
</script>
<template>

<div class="  max-w-[1252px] flex-col w-full justify-cente flex-col items-center">
    <div class="container   w-full my-8 flex justify-start items-center   px-5 ">
        <VTextField 
        v-model="hotelNameQuery"
        class="w-[300px] mt-6"   placeholder="Hotel name or destination
    " variant="text">
    <template #prepend-inner>
    
        <Icon width="25"    color="#ccc" icon="mdi-magnify" />
    </template>
       
    <template #append-inner>
    
        <Icon class="cursor-pointer"   @click="()=>{
            servicesByType=oldValue
        hotelNameQuery = ''
        }" width="25"    color="#ccc" icon="mdi-close" />
    </template>
    </VTextField>
    <v-date-input   :min="new Date()" label="Enter Date"    class="date-picker"  variant="plain" >
        <template #prepend-inner>
    
            <Icon width="25"     color="#ccc" icon="mdi-calendar-blank" />
        </template>
    </v-date-input>
    
    <VSelect   v-model="numberOfPersons" class="my-select" variant="text":items="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" />
    <button
    :disabled="cities.length==0"
    @click="filterFunciton()"
    class="orange-btn text-white">Find Hotel</button>
    </div>
    <div>
    
        <div 
        class=" py-5  min-w-full"
        >
        <h1 class=" font-semibold text-left min-w-full b text-xl">Select State  </h1>
    <div 

    class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">
    <div 
    
    @click="()=>{
        selecttedStateId=item.id
       
        selectedCityTitle=''
        selectedCityDescription =''
        servicesByType=[]
        selecttedStateId=item.id
      getCitiesByStateId(item.id)
      readCityFeedBack(item.id)
 
    }"  class="flex w-[300px]  cursor-pointer h-[120px] items-end  rounded-lg overflow-hidden" v-for="item in allStates"
        :class="selecttedStateId==item.id?'border-[#0000ff] border-solid border border-[2px]':' shadow-xl '"
    >
      <img class="w-full h-[120px] max-w-[150px] object-cover" :src="getFileUrl(item.image)" />
    <h2 class="m-2 text-[#00000070] text-xl font-bold  ">{{item.name}}</h2>
    
    </div>
    
    </div>
    <div class="mt-5 min-w-full">


    </div>
        </div> 

    </div>
    <div>
    
        <div 
        class=" py-5  min-w-full"
        >
        <h1 v-if="selecttedStateId!==''" class=" font-semibold text-left min-w-full b text-xl">Select City  </h1>
    <div class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">
    <div @click="async()=>{
    
      selectedCityTitle = item. name
      selectedCityDescription=item.detail
      servicesByType=[]
      selctedCityId= item.id
  await    getServicesByCityIdAndType(item.id,  5)
      oldValue=servicesByType
 
    }"  class=" w-[200px]  cursor-pointer h-[200px] shadow-xl  rounded-lg overflow-hidden" v-for="item in cities">
      <img class="w-full h-[150px] object-cover" :src="getFileUrl(item.image)" />
    <h2 class="m-2  font-bold ">{{item.name}}</h2>
    
    </div>
    
    </div>
    <div class="mt-5 min-w-full">
    <h1 class="text-3xl font-bold">    {{selectedCityTitle}}</h1>
    <p class="mt-3 text-lg min-w-full">  {{selectedCityDescription}}</p>
    </div>
        </div> 

<div class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">

    <HotelCard  v-for="service in  servicesByType"
    :service="service"
    />
</div>
</div>

<div class="pb-5" v-if="selectedCityTitle!==''"><Reviews
    :city_id="selctedCityId"
    :feedBacks="citiesFeedBack"
    /></div>
</div>
</template>
<style scoped>
.my-select{
    /* Group 101 */
/* Group 101 */

border:1px solid  #aaa;
max-width: 154px;
border-radius: 10px;
margin:  0px 20px;
height: 55px;



}

.container {
    /* Group 104 */


/* Rectangle 43 */



height: 76px;


background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;


}
.date-picker {
    /* Rectangle 44 */



width: 6px;
height: 55px;


background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.25);
border-radius: 12px;

}
.date-picker .v-field__input{

}
.orange-btn {
    /* Group 103 */

/* Rectangle 46 */

box-sizing: border-box;


width: 189px;
height: 55px;


background: #FF7A00;
border: 1px solid rgba(0, 0, 0, 0.25);
border-radius: 12px;



}
</style>