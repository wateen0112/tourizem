<script setup lang="ts">
import LoginImage  from '../../assets/images/login.png'

</script>

<template>

<div class="w-full  h-[500px]     relative rounded-b-2xl overflow-hidden"
:style="'background:url('+LoginImage+'); background-repeat: no-repeat;background-size: cover; background-position: center center;'"
>

<div class="w-full  z-20 flex lg:items-end  flex-col items-center justify-center h-[500px]">
<h1 class="text-2xl px-8 text-white font-semibold">Discover A Beautiful Place With Us</h1>
<h2  class="text-[#ccc] px-8  ">Where do you want go?</h2>
<router-link to="services"  class="mx-8 mt-2 text-white px-4 py-1 font-semibold  rounded-full bg-[#5EB5D7]">
    Services
</router-link>
</div>

</div>
</template>