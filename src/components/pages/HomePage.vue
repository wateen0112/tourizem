<script setup lang="ts">
import MainBanner from '../home/MainBanner.vue'
import Benfit from '../home/Benfit.vue'
import Famos from '../home/Famos.vue'
import Recommends from '../home/Recommends.vue'
import Packages from '../home/Packages.vue'
import Reviews from '../home/Reviews.vue'
import { onMounted, ref } from 'vue'
import { UseAuthStore } from '../../store/Auth'
import { storeToRefs } from 'pinia'

import { VDateInput } from 'vuetify/labs/VDateInput'
const authStore  = UseAuthStore();
const {isLoggedIn} = storeToRefs(authStore)

const showSwagDialog = ref(false)
const currentSlide = ref(1);
onMounted(()=>{
    if (isLoggedIn.value&&!localStorage.getItem('swag_done')){
        showSwagDialog.value  = true
    }
})
const tripTypesData = [
    'Cultural',
    'Leisure',
    'Relaxation',
    'Adventure',
    'Shopping',
    'Others',
]
const placesToVisitData  = [
    'beaches',
    'mountains',
    'historical cities',
    'Adventure',
    'Shopping',
    'Others',

]
const favouriteActivitesData = [
    'skiing',
    'diving',
    'visiting museums',
    'shopping',
    'camping',
    'Others',
    
]
const accomentationsData = [
    'Hotels',
    'resorts',
    'serviced apartments',
    'guesthouses',
    
    'Others',
    
]
const culturalData  =[
    'any thing is good',
    'shopping'
    ,'camping',
    'others'
]
const requiredFacilities  =[
    "children's activities",
    'accessibility for people with disabilities'
    ,'Others',
    
]
const caltularData  =[
    "any thing is good",
    'shopping',
    'camping',
    'Others',
    
]
const  tripTypes = ref([])
const  caltular = ref([])
const  placesToVisit = ref([])
const  favouriteActivites = ref([])
const  facilities = ref([])
const  accomentations = ref([])
const arrayEvent = (item,arr)=>{
if ( arr.includes (item)){
    arr = arr.filter(i =>{
        return  i  !==item
    })
   
}
else {
        arr.push(item)
    }
}
const handleSave = ()=>{
    showSwagDialog .value= false
    localStorage.setItem('swag_done','true')
}
</script>

<template>
<v-dialog 

width="800px"
v-model="showSwagDialog">
<div
 class="w-[800px] h-[470px] bg-[#cccccc]  rounded-2xl p-5"
><div  v-if="currentSlide==1" class="scale-[.7] mt-[-60px] ml-[-120px] ">
    <h2 class="font-semibold text-lg">Help us to provied you a good user experience , we need to know your preferences and interests:  </h2>
    <h2 class="font-semibold text-lg mt-3">Travel Preferences: </h2>
    <div >
    <div  class="flex gap-5  mt-5 justify-start items-cetner">
    <h3 class="py-4 font-semibold">Budget:</h3> <VSelect
    class="dialog-select mt-1"
    variant="text"  value="100" :items="[100,200,300,400,500,600,700,800,900,1000]" >
    <template #prepend-inner>$</template>
    
    </VSelect>
    
    </div>
    <div  class="flex gap-5  mt-5 justify-start items-cetner">
        <h3 class="py-4 font-semibold">Available Travel Duration:</h3> <v-date-input
        class="dialog-select mt-1"
        variant="text" :min="new Date()" >
    
        </v-date-input>
        
        </div>
        <div  class="flex gap-5  mt-5 justify-start items-cetner">
            <h3 class="py-4 font-semibold">Type of Trip:</h3> 
       <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
        <div
        @click="arrayEvent(item , tripTypes)"
        :class="tripTypes.includes(item)?'opacity-50':''"
        v-for="item in tripTypesData" class="my-chip flex justify-center ">{{item}}</div>
          </div>
       </div>
        <div  class="flex gap-5  mt-5 justify-start items-cetner">
            <h3 class="py-4 font-semibold">Preferred Places to Visit:</h3> 
            <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
            <div
          @click="arrayEvent(item , placesToVisit)"
          :class="placesToVisit.includes(item)?'opacity-50':''"
          v-for="item in placesToVisitData" class="my-chip flex justify-center ">{{item}}</div>
            </div>
            </div>
        <div  class="flex gap-5  mt-5 justify-start items-cetner">
            <h3 class="py-4 font-semibold">Preferred Type of Accommodation:</h3> 
            <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
            <div
          @click="arrayEvent(item , accomentations)"
          :class="accomentations.includes(item)?'opacity-50':''"
          v-for="item in accomentationsData" class="my-chip flex justify-center ">{{item}}</div>
            </div>
            </div>
        <div  class="flex gap-5  mt-5 justify-start items-cetner">
            <h3 class="py-4 font-semibold">Favorite Activities:</h3> 
            <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
            <div
          @click="arrayEvent(item , favouriteActivites)"
          :class="favouriteActivites.includes(item)?'opacity-50':''"
          v-for="item in favouriteActivitesData" class="my-chip flex justify-center ">{{item}}</div>
            </div>
            </div>
    <div class="w-full  ml-[140px] gap-5 mt-5 flex justify-end items-cemter">


        <button  @click="showSwagDialog = false" class="bg-[#888] text-white rounded-2xl px-5 py-2">Cancel</button>
        <button @click="currentSlide = 2" class="bg-[#5EB5D7] text-white rounded-2xl px-5 py-2">Next</button>
    </div>
        </div>
    </div>
    <div  v-if="currentSlide==2" class="scale-[.7] mt-[-60px] ml-[-120px] ">
        <h2 class="font-semibold text-lg">Help us to provied you a good user experience , we need to know your preferences and interests:    </h2>
        <h2 class="font-semibold text-lg mt-3">Additional Information </h2>
        <div  class="flex gap-5  mt-5 justify-start items-cetner">
            <h3 class="py-4 font-semibold">Expected Travel Date:</h3> <v-date-input
            class="dialog-select mt-1"
            variant="text" :min="new Date()" >
        
            </v-date-input>
           
            </div>
            <div  class="flex gap-5  mt-5 justify-start items-cetner">
                <h3 class="py-4 font-semibold">Required Facilities:</h3> 
           <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
            <div
            @click="arrayEvent(item , facilities)"
            :class="facilities.includes(item)?'opacity-50':''"
            v-for="item in requiredFacilities" class="my-chip flex justify-center ">{{item}}</div>
              </div>
           </div>
            <div  class="flex gap-5  mt-5 justify-start items-cetner">
                <h3 class="py-4 font-semibold">Cultural and Religious Preferences:</h3> <VSelect
                class="dialog-select mt-1"
                variant="text"
                value="Aleppo"
                :items="['Aleppo' , 'Damascus']" >
          
                
                </VSelect>
                
                </div>
            <div  class="flex gap-5  mt-5 justify-start items-cetner">
                <h3 class="py-4 font-semibold">Language:</h3> <VSelect
                class="dialog-select mt-1"
                variant="text"
                value="English"
                :items="['Arabic' , 'English']" >
          
                
                </VSelect>
                
                </div>
        <div >
    
   
   

        
            <div  class="flex gap-5  mt-5 justify-start items-cetner">
                <h3 class="py-4 font-semibold">Cultural and Religious Preferences:</h3> 
                <div class="w-auto flex justify-statr items-center flex-row flex-wrap gap-5">
                <div
              @click="arrayEvent(item , caltular)"
              :class="caltular.includes(item)?'opacity-50':''"
              v-for="item in caltularData" class="my-chip flex justify-center ">{{item}}</div>
                </div>
                </div>
                <h3 class="font-semibold">Personal Information</h3>
 <div class="flex justify-space-between items-center">
<div class="flex justify-start items-center ">
    <h3 class="font-semibold">Age</h3>
    <input  class="input" type="text"  />

</div>
<div class="flex justify-start items-center ">
    <h3 class="font-semibold mr-10">Gander</h3>
<input   id="male" name="gander"  class="scale-[2] mx-4 mt-1" type="radio" /><label for="male">Male</label>
<input  id="fimale" name="gander"  class="scale-[2] mx-4 mt-1" type="radio" /><label for="fimale">Fimale</label>
</div>

 </div>
        <div class="w-full  ml-[140px] gap-5  flex justify-end items-cemter">
    
    
            <button  @click="currentSlide = 1" class="bg-[#888] text-white rounded-2xl px-5 py-2">Back</button>
            <button @click="()=>{
            
              handleSave()
            }" class="bg-[#5EB5D7] text-white rounded-2xl px-5 py-2">Save</button>
        </div>
            </div>
     
        </div>
    </div>
</v-dialog>
<div  class="min-h-screen bg-white" >

<MainBanner/>
<Benfit/>
<h2  class="text-center  text-4xl font-semibold" >Famous</h2>
<Famos/>
<h2  class="text-center  text-4xl font-semibold" >Recommends</h2>
<Recommends/>
<!-- 
<Packages/> -->
<!-- <Reviews/> -->
</div>
</template>
<style scoped >
.dialog-select{
    /* Rectangle 73 */

max-width: 165px;
height: 54px;

background: #D9D9D9;
border-radius: 12px;

}
.my-chip{
    /* Rectangle 75 */

width: auto;
margin-top:12px;
padding: 5px 8px;
min-width: 80px;
height: 36px;

cursor: pointer;
background: #D9D9D9;
border-radius: 12px;

}
.input {
    /* Rectangle 74 */


width: 165px;
height: 46px;
margin: 8px 14px;

background: #D9D9D9;
border-radius: 12px;

}
</style>