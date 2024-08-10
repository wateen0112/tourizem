<script setup lang="ts">
import {Icon} from '@iconify/vue'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { UseUserStore } from '../../store/User';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { UseAuthStore } from '../../store/Auth';
const store = UseUserStore()
const {createReservation }= store ; 
const {createReservationDto}  = storeToRefs(store)

const router = useRouter()
const myDate = ref()
const route = useRoute();
const id = route.params.id
const userDto= JSON.parse(localStorage.getItem('user-data'))
const handleCreateReservation  = ()=>{
   createReservationDto.value .station_destinations = id; 
   createReservationDto.value .user_id = userDto.id
   createReservationDto.value .price =1000
   createReservationDto.value .paid =createReservationDto.value .paid !==''?1:0
   const dateArr =myDate.value.toLocaleString().split(' ')[0].replaceAll('/','-').replaceAll(',','').split('-')

   createReservationDto.value.travel_date = dateArr[2]+'-'+dateArr[0]+'-'+dateArr[1]

   createReservation().then(()=>{
   router.push({name:'Profile'})
})
}
</script>
<template>
<form  @submit.prevent="handleCreateReservation()" class="p-[80px]    lg:px-28 min-h-[60vh] w-full relative">
    <h1 class="text-3xl  font-semibold">Reserve process</h1>

    <div  
    class="grid lg:grid-cols-2  grid-cols-1 w-full"
    >
<!-- col1 -->
 <div class="flex justitfy-start items-start gap-4 flex-col">
    <h2 class=" mt-8 text-xl ">Personal Information: </h2>
    <!-- item -->
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required   class="my-input" 
        
        placeholder="Full Name ( The Name in Passport)"
        />
     </div>
    <!-- item -->
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required   class="my-input" 
        placeholder="Nationality"
        />
     </div>
    <!-- item -->
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required   class="my-input" 
        placeholder="Passport ID"
        />
     </div>
    
    <!-- item -->
     <div  class="flex justify-start w-full  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required    class="my-input" 
        placeholder="Expiration date your passport"
        type="text"
       onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}"
        
        />
     </div>
     <h2 class=" mt-8 text-xl ">Contact Information: </h2>
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required    class="my-input" 
        placeholder="Phone Number"
        />
     </div>
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required    type="email" class="my-input" 
        placeholder="E-mail"
        />
     </div>
     <h2 class=" mt-8 text-xl ">Payment Information: </h2>
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required   class="my-input" 
        placeholder="Full Name ( The Name in Credit card)"
        />
     </div>
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input    class="my-input" 
        v-model="createReservationDto.paid"
        placeholder="Credit card ID"
        />
     </div>
     <div  class="flex justify-start w-full   mt-2  items-center gap-3">
        <Icon  icon="mdi-check-circle-outline" />
        <input required   class="my-input" 

        placeholder="Expiration date your Credit card"
        type="text"
       onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}"
        />
     </div>
 </div>
 <!-- col2 -->
<div class="flex justitfy-start items-start gap-8  flex-col">
    <h2 class=" mt-8 text-xl ">Travel Information: </h2>
    <div  class="flex justify-start w-full  mt-[-10px]  items-center gap-3">
       <Icon  icon="mdi-check-circle-outline" />
       <input required   class="my-input" 
       placeholder="From: your location"
       />
    </div>
    <div  class="flex justify-start w-full   items-center gap-3">
       <Icon  icon="mdi-check-circle-outline" />
       <input required   class="my-input" 
       placeholder="To : your Destination"
       />
    </div>
  
<div>
    <div class="flex justify-start items-center gap-3">

        <Icon  icon="mdi-check-circle-outline" />
     <div class="grid grid-cols-2 gap-5">

      <v-date-input 
      required
     :min="new Date()"
  class="my-input-small" 
  variant="text"
  placeholder="Depart Date"
v-model="myDate"

  />
  <v-date-input 
  required
       variant="text"
  class="my-input-small" 
  placeholder="Return  Date"


  />
    </div>
    </div>
    
</div>

<div>
    <div class="flex justify-start items-center gap-3">

        <Icon  icon="mdi-check-circle-outline" />
     <div class="grid grid-cols-2 gap-5">
        <input required class="my-input-small" 
        placeholder="Namber of adults"
        type="number"
              min="0"
        />
        <input required  
        class="my-input-small" 
        placeholder="Number of Kids"
        min="0"
        type="number"
    
        />
     </div>
    </div>
    <h2 class=" mt-8 text-xl ">Travel Class: </h2>
    <div  class="flex justify-start w-full   mt-2  items-center gap-3">
       <Icon  icon="mdi-check-circle-outline" />
       <select   class="my-input" 
       placeholder="From: your location"
       >
    <option selected>
        First class

    </option>
    <option>
        Business class

    </option>
<option>
    Economy class
    </option>
</select>
    </div>
</div>
</div>
</div>
<div class="lg:absolute bottom-8 right-10 w-full flex  justify-cetner lg:justify-end items-center">

    <input type="submit" value="Commit" @submit.prevent="handleCreateReservation()" class="commit">
    <!-- <button type="button" value="Commit" @click.prevent="handleCreateReservation()" class="commit">commit</button> -->
</div>
</form>

</template>
<style scoped  lang="scss">
.my-input {
    ::placeholder{
        color:black;
text-align: center;
    }
    /* Rectangle 62 */


width: 476px;
height: 48px;
padding:0px 14px !important;

background: rgba(94, 181, 215, 0.68);
border-radius: 12px;

}
.my-input-small{
    width: 229px;

    /* Rectangle 62 */



height: 48px;
padding:0px 14px !important;

background: rgba(94, 181, 215, 0.68);
border-radius: 12px;

}
.commit{
    /* Rectangle 67 */


width: 111px;
height: 34px;


background: rgba(255, 122, 0, 0.79);
border-radius: 12px;

}
</style>