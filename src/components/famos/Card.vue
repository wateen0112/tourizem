<script setup lang="ts">
import Img from '../../assets/images/card.jpg'
import {Icon} from '@iconify/vue'
import appConfig from  '../../../app.config';
import { useRouter } from 'vue-router';
const props = defineProps (['country','route','isCity','countryName','rate'])
const router = useRouter()
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>
<template>

    <div  @click="()=>{

        router.push({path:route})
   
    }"  class=" mx-auto h-[460px] relative  ">
        <div class="absolute   top-2 right-2 justify-center   gap-[2px] w-[60px] h-[25px] flex rounded-full bg-[#dcdcdc]">
    <Icon color="orange" width="20"  icon="mdi-star"  class="mt-[3px]" />
    <span class="text-sm mt-[3px] font-semibold text-[#00000055]">{{isCity ?  rate??'0' :country.rate??(Math.random()*10).toFixed(1)}}</span>
        </div>
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 w-[280px] dark:border-gray-700">
               
                    <img class="rounded-lg  h-[350px] w-full" :src="getFileUrl(country.image)" alt="">
               
                <div class=" h-[105px] p-2 ">
    
                  <h3 class="font-semibold text-xl">{{country.name??''}}</h3>
        
                  <div   v-if="isCity"   class="flex"><Icon  color="#B0370283" icon="mdi-map-marker"  /> <span class="mt-[-1px] text-sm text-[#00000035]">{{countryName}}</span></div>
                <div class="flex justify-between items-center">
                    <router-link to="" class="flex">  
                        <span  class="text-[#00000054]">See more</span>
    <Icon  class="mt-1" icon="mdi-chevron-right" color="#00000054"></Icon>
    
                    </router-link>
                    <router-link class="bg-[#FF7A00] px-3 text-white font-semibold  py-1 rounded-full" to="">
                        Book Now
                    </router-link>
                </div>
                </div>
            </div>
        
           
        </div>

</template>