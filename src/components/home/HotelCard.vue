<script setup lang="ts">
import HotelImage from '../../assets/images/hotel_temp.png'
    import {Icon} from '@iconify/vue'
    
    import appConfig from '../../../app.config';
const props = defineProps(['service'])
const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>

<template>
<div class="w-[220px] border rounded-lg h-[320px] shadow-md ">

<img   class=" w-full rounded-lg h-[250px] object-cover" :src="service.image ? getFileUrl(service.image):HotelImage" />
<div class="p-2">
    <h3 class="font-bold capitalize text-lg">{{service.name}}</h3>
<div   lass="flex justify-between w-full flex-row items-center">
<div class="flex w-auto justify-start items-center  mt-1">
    <Icon   v-for="item in 4" icon="mdi-star"  color="#FFC700"/>
    <Icon  icon="mdi-star"  color="#ccc"/>
    <span class="  ml-6 text-[#00000050]">{{ (Math.random()*3500).toFixed(0)}} reviews</span>
</div>

</div>
</div>

</div>
</template>