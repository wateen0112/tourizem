
<script setup lang="ts">
import { useRouter } from 'vue-router';
import F from '../../assets/images/f.jpg'
import {Icon} from '@iconify/vue'
import { storeToRefs } from 'pinia';
import appConfig from  '../../../app.config';
import { UseAuthStore } from '../../store/Auth';
const router = useRouter()
const props = defineProps(['station'])
const {isLoggedIn}   = storeToRefs(UseAuthStore())
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>
<template>

<div class=" container flex justify-start gap-3  items-center p-2 ">
    <img  :src="station.image ?getFileUrl( station.image):F"  class="w-[195px] h-[145px]  rounded-2xl" />
<div class="flex justufy-start items-start h-full py-4 w-full gap-2  flex-col ">
<!-- row 1 -->
 <div class="flex justify-between w-full  items-center">
<h2 class="font-bold text-xl">{{station.name.length> 26?station.name.slice(0,26)+'..':station.name}}</h2>
<span  class="bg-[#AFFFD4]  flex  text-[#ffffff99] font-bold justify-center text-sm items-center w-[80px] h-[25px] rounded-full">
available

</span>
 </div>
<!-- row 1 -->
<!-- row 2 -->
 <div class="flex justify-between w-full  items-center">


 </div>
<!-- row 2 -->
 <!-- row 3 -->
 <div class="flex justify-between w-full  items-center">
    <h2 class="font-semibold text-lg flex justify-center items-center gap-3"> <Icon icon="mdi-call" /> +963 927867263</h2>
  <div class="flex justify-center items-center gap-1">
<Icon   icon="mdi-web" />  <a class="text-red-500  font-semibold  flex justify-center items-center gap-1" target="_blank" href='' >Website <Icon  color="black"  icon="mdi-arrow-top-right" /></a>
 
  </div>
     </div>
    <!-- row 3 -->
 <!-- row 4 -->
 <div class="flex justify-between w-full  items-center mt-8">
  

    <div class="flex justify-start px-1 items-center">
        <div class="flex justify-start">
<Icon  width="20" icon="mdi-star" color="#FFC700" v-for="item in 4 " />
<Icon  width="20" icon="mdi-star" color="#00000025" />
<span class="text-[#00000034] text-xs mt-1 font-semibold">19,566  reviews</span>

        </div>
    </div>
 <button 
 @click="()=>{
if(isLoggedIn){
    router.push({path:'/reserve/'+station.id})
} 
else {
    router.push({name:'Login'})
}

}"
 class="px-3 reserve text-white"  
    
    >Reserve</button>
     </div>
    <!-- row 4 -->
</div>
</div>

</template>
<style scoped >
.container {
    /* Rectangle 32 */

box-sizing: border-box;


width: 575px;
height: 184px;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.23);

border-radius: 12px;

}
.reserve{
    /* Rectangle 58 */


width: 127px;
height: 23px;


background: #FF7A00;
border-radius: 12px;

}
</style>