
<script  setup lang="ts">
import { onMounted, ref } from 'vue';
import  {UseActivitiesStore }from '../../store/Activites'
import { storeToRefs } from 'pinia';
import appConfig from '../../../app.config';
import { UseStateStore } from '../../store/State';
import HotelCard from './HotelCard.vue';
const store = UseActivitiesStore();
const stateStore  = UseStateStore()
const {readCountryHobbies} = store;
const props = defineProps(['countryId'])
const loading = ref(true)
const {hobbiesByCountry} = storeToRefs(store)
const selectedCityTitle = ref('')
const hotelNameQuery = ref('')
const {getServicesByCityIdAndType,readCityHobbies,getCitiesByStateId,getServicesByCityIdAndTypeWithreturn} = stateStore
const {cities,allStates,cityHobbiesDto} = storeToRefs(stateStore)
const selecttedStateId  = ref('')
const selectedCityDescription = ref('')
const resturantsService = ref([])
const museumServices = ref([])
onMounted(()=>{
readCountryHobbies(props.countryId).then(()=>{
    loading.value = false
}).catch()
})
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>
<template>

<div class="min-w-full flex justify-center items-center  flex-col">
    <div class="flex justify-evenly w-full gap-4  max-w-[1252px]  ">

        <div  v-for="item in hobbiesByCountry"  class="flex flex-col justify-center items-center">
            <div  class="hobby overflow-hidden">

                <img src="https://wanderhealthy.com/wp-content/uploads/2023/01/healthy-hobbies-1.jpg" />
            </div>
            <h2 class="text-lg mt-2 font-bold">{{item.name}}</h2>
        </div>
        
        </div>
        <div>
            
            <div 
            class=" py-5  w-full  max-w-[1252px] "
            >
            <h1 class=" font-semibold text-left min-w-full b text-xl">Select State  </h1>
        <div 
        
        class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">
        <div 
        
        @click="()=>{
        cityHobbiesDto = []
            selecttedStateId=item.id
             selectedCityDescription =''
             selectedCityTitle=''
 resturantsService = []
 museumServices = []
          getCitiesByStateId(item.id)
        
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
        <div class="w-full max-w-[1252px]">
        
            <div 
            class=" py-5    w-full"
            >
            <h1 class=" font-semibold text-left w-full text-left text-xl">Select City  </h1>
        <div class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">
        <div @click="async()=>{
            cities= []
            selectedCityDescription= ''
            selectedCityTitle=''
            
          selectedCityTitle = item. name
          cityHobbiesDto=[]
          await readCityHobbies(item.id)
          selectedCityDescription=item.detail
    resturantsService =    await    getServicesByCityIdAndTypeWithreturn(item.id,  2)
    museumServices =    await    getServicesByCityIdAndTypeWithreturn(item.id,  4)
        
        
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
            </div> 
           <div class=" max-w-[1252px]  w-full"
           v-if="resturantsService.length"
           >
         <h2 class="font-semibold text-left w-full text-left text-3xl">Resturants</h2>
            <div class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">

                <HotelCard  v-for="service in  resturantsService"
                :service="service"
                />
            </div>
           </div>
           <div class=" max-w-[1252px]  mt-4 w-full"
           v-if="museumServices.length"
           >
         <h2 class="font-semibold text-left w-full text-left text-3xl">Meseum</h2>
            <div class="flex mt-5 justufy-start items-center  gap-5  w-full flex-row flex-wrap">

                <HotelCard  v-for="service in  museumServices"
                :service="service"
                />
            </div>
           </div>
           <h1  v-if="cityHobbiesDto.length" class="text-2xl  my-5  w-full text-left   max-w-[1252px] font-bold">   Available Acitives </h1>
  <div class="flex justify-start w-full max-w-[1252px] gap-5 flex-row flex-wrap">
    <div  v-for="item in cityHobbiesDto"  class="flex flex-col justify-center items-center">
        <div  class="hobby overflow-hidden"> 

<img src="https://wanderhealthy.com/wp-content/uploads/2023/01/healthy-hobbies-1.jpg" alt="">

        </div>
        <h2 class="text-lg mt-2 font-bold">{{item.name}}</h2>
    </div>
  </div>
</div>

</template>
<style scoped>

.hobby{
    /* Rectangle 55 */


width: 295px;
height: 161px;



background: #D9D9D9;
border-radius: 48px 0px;

}
</style>