
<script setup lang="ts">
import {Icon} from '@iconify/vue'
import appConfig from '../../../app.config';
const props = defineProps(['feedback'])

const getFileUrl  =(url)=>{
return appConfig.API_URL+'/'+url
}
</script>
<template>
<!-- component -->
<div class="relative  border   flex w-full max-w-[300px] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md h-[200px]  p-5">
    <div class="relative mx-0 mt-4 min-h-[60px] flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
      <img
        :src="'data:image/png;base64,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'"
        alt="tania andrew"
        class="relative inline-block h-[30px] w-[30px] object-fill !rounded-full object-cover object-center"
      />
      <div class="flex w-full flex-col gap-0.5">
        <div class="flex items-center justify-between">
          <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {{feedback.user_first_name}}
          </h5>
    
       
        </div>
       
      </div>
    </div>
    <div class="mb-6 p-0">
      <p class=" max-h-[150px] block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {{feedback.feedback}}
      </p>
      
      <div class="flex justify-start min-h-[50px]  mx-5 items-center">

        <Icon 
        class="cursor-pointer"
         :color="feedback.rate>=item?'orange':'#ccc'"  v-for="item in 5 " width="24"
        icon="mdi-star" />
    
    </div>
    </div>
  </div>
  

  
  <!-- stylesheet -->


</template>