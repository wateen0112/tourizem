<script   setup lang="ts">
import LoginImage  from '../../assets/images/login.png'
import {Icon} from '@iconify/vue'
</script>
<template>
<div class="min-h-[98vh] overflow-hidden w-full"
:style="'background:url('+LoginImage+');background-repeat:no-repeat;background-size:cover;background-position:center center'"
>
<h1 class="pt-24 px-12 text-4xl font-bold ">Contact us:</h1>
<div class="flex justify-center items-center w-full px-12 mt-4">
    <VTextField   variant="tonal" placeholder="Write Your Comment " class=" px-5 bg-[#D9D9D9] rounded-lg h-[52px] ">
        <template #append-inner>
            <Icon  width="40" color="#000" :icon="'mdi-telegram'" />
        </template>
    </VTextField>
</div>
<div class="flex justify-end items-end  w-full flex-col px-12">
   <div class="mt-8 text-2xl font-bold">
    <h2 class="text-left">Also See us on :</h2>
    <div class="flex mt-3 justify-start items-center gap-5">


        <Icon icon="mdi-facebook"  color="#76C8E8"  width="40px" />
        <Icon icon="mdi-instagram"  color="#76C8E8"  width="40px" />
        <Icon icon="mdi-linkedin"  color="#76C8E8"  width="40px" />
        <Icon icon="mdi-github"  color="#76C8E8"  width="40px" />

    </div>
   </div>
</div>
</div>
</template>
<style scoped>

.contact-input{



background: #D9D9D9;
border-radius: 14px;





/* Write Your Comment */


width: 326px;
height: 34px;


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
/* identical to box height */

color: rgba(0, 0, 0, 0.25);


}
</style>